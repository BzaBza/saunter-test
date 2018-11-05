/* eslint-disable no-undef */

import React from "react"
import {compose, withProps, lifecycle} from "recompose"
import {withScriptjs, withGoogleMap, GoogleMap, DirectionsRenderer} from "react-google-maps"
import PropTypes from "prop-types";

const MyMapComponent = compose(
 withProps({
   googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyArFoYz5gvVCKMaAUr-qH29gFdtx7Lp1Dk&callback=initMap",
   loadingElement: <div style={{height: `100%`}}/>,
   containerElement: <div style={{height: `75vh`}}/>,
   mapElement: <div style={{height: `100%`}}/>,
 }),
 withScriptjs,
 withGoogleMap,

 lifecycle({
   componentDidMount() {
     const DirectionsService = new google.maps.DirectionsService();
     DirectionsService.route({
       origin: new google.maps.LatLng(this.props.currentPathData[0].lat, this.props.currentPathData[0].lng),
       destination: new google.maps.LatLng(
        this.props.currentPathData[this.props.currentPathData.length - 1].lat,
        this.props.currentPathData[this.props.currentPathData.length - 1].lng
       ),
       travelMode: google.maps.TravelMode.WALKING,
     }, (result, status) => {
       if (status === google.maps.DirectionsStatus.OK) {
         this.setState({
           directions: result,
         });
       }
     });
   },
   componentDidUpdate() {
     const DirectionsService = new google.maps.DirectionsService();
     DirectionsService.route({
       origin: new google.maps.LatLng(this.props.currentPathData[0].lat, this.props.currentPathData[0].lng),
       destination: new google.maps.LatLng(
        this.props.currentPathData[this.props.currentPathData.length - 1].lat,
        this.props.currentPathData[this.props.currentPathData.length - 1].lng
       ),
       travelMode: google.maps.TravelMode.WALKING,
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
  defaultZoom={14}
  defaultCenter={{
    lat: props.currentPathData[0].lat,
    lng: props.currentPathData[0].lng
  }}
 >
   {props.directions && <DirectionsRenderer directions={props.directions}/>}

 </GoogleMap>
);

class Map extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      isMarkerShown: false,
    };
  }

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
      isMarkerShown={this.state.isMarkerShown}
      onMarkerClick={this.handleMarkerClick}
      currentPathData={this.props.currentPathData.coordinates}
     />
    )
  }
}

Map.propTypes = {
  currentPathData: PropTypes.object,
};
export default Map;