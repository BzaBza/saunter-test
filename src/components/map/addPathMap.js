/* eslint-disable no-undef */

import React from "react"
import {compose, withProps, withStateHandlers, lifecycle} from "recompose"
import {withScriptjs, withGoogleMap, GoogleMap, DirectionsRenderer} from "react-google-maps"
import PropTypes from "prop-types";

let directions = [[41.8507300, -87.6512600], [41.8507300, -87.6512600]];

const MyMapComponent = compose(
 withProps({
   googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyArFoYz5gvVCKMaAUr-qH29gFdtx7Lp1Dk&callback=initMap",
   loadingElement: <div style={{height: `100%`}}/>,
   containerElement: <div style={{height: `80vh`}}/>,
   mapElement: <div style={{height: `100%`}}/>,
 }), withStateHandlers(() => ({
   isMarkerShown: false,
   markerPosition: null
 }), {
   onMapClick: ({isMarkerShown}) => (e) => (
    {
      directions: directions.push([e.latLng.lat(), e.latLng.lng()]),
      isMarkerShown: true
    }
   )
 }),
 withScriptjs,
 withGoogleMap,
 lifecycle({
   componentDidMount() {
     const DirectionsService = new google.maps.DirectionsService();
     console.log(directions[0][0], directions[0][1]);
     DirectionsService.route({
       origin: new google.maps.LatLng(directions[0][0], directions[0][1]),
       destination: new google.maps.LatLng(directions[directions.length - 1][0], directions[directions.length - 1][1]),
       travelMode: google.maps.TravelMode.DRIVING,
     }, (result, status) => {
       if (status === google.maps.DirectionsStatus.OK) {
         this.setState({
           directions: result,
         });
       } else {
         console.error(`error fetching directions ${result}`);
       }
     });
   },
   componentWillReceiveProps() {
     const DirectionsService = new google.maps.DirectionsService();
     console.log(directions[0][0], directions[0][1]);
     DirectionsService.route({
       origin: new google.maps.LatLng(directions[0][0], directions[0][1]),
       destination: new google.maps.LatLng(directions[directions.length - 1][0], directions[directions.length - 1][1]),
       travelMode: google.maps.TravelMode.DRIVING,
     }, (result, status) => {
       if (status === google.maps.DirectionsStatus.OK) {
         this.setState({
           directions: result,
         });
       } else {
         console.error(`error fetching directions ${result}`);
       }
     });
   }
 })
)((props) =>
 <GoogleMap
  defaultZoom={15}
  defaultCenter={{
    lat: 41.8507300,
    lng: -87.6512600,
  }}
  onClick={props.onMapClick}
 >

   {props.directions && <DirectionsRenderer directions={props.directions}/>}
 </GoogleMap>
);

class AddPathMap extends React.PureComponent {
  componentDidMount() {
    this.delayedShowMarker()
  }

  delayedShowMarker = () => {
    setTimeout(() => {
      this.setState({isMarkerShown: true})
    }, 3000)
  };

  handleMarkerClick = () => {
    this.setState({isMarkerShown: false});
    this.delayedShowMarker()
  };

  render() {
    return (
     <MyMapComponent
      onMarkerClick={this.handleMarkerClick}
      directions={directions}
     />
    )
  }
}

Map.propTypes = {
  currentPathData: PropTypes.object,
};
export default AddPathMap;