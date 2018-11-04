/* eslint-disable no-undef */

import React from "react"
import {compose, withProps, withStateHandlers, lifecycle} from "recompose"
import {withScriptjs, withGoogleMap, GoogleMap, DirectionsRenderer} from "react-google-maps"
import PropTypes from "prop-types";
import connect from "react-redux/es/connect/connect";
import {getNewPath} from "../../redux-stuff/actions/newPath";

let directions = [{lat:41.8507300, lng: -87.6512600}, {lat: 41.8507300, lng: -87.6512600}];

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
      directions: directions.push({lat: e.latLng.lat(), lng: e.latLng.lng()}),
      isMarkerShown: true
    }
   )
 }),
 withScriptjs,
 withGoogleMap,
 lifecycle({
   componentDidMount() {
     const DirectionsService = new google.maps.DirectionsService();
     DirectionsService.route({
       origin: new google.maps.LatLng(directions[0].lat, directions[0].lng),
       destination: new google.maps.LatLng(directions[directions.length - 1].lat, directions[directions.length - 1].lng),
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
   },
   componentWillReceiveProps() {
     this.props.onGetNewPath(directions);
     const DirectionsService = new google.maps.DirectionsService();
     DirectionsService.route({
       origin: new google.maps.LatLng(directions[0].lat, directions[0].lng),
       destination: new google.maps.LatLng(directions[directions.length - 1].lat, directions[directions.length - 1].lng),
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

  render() {
    return (
     <MyMapComponent
      directions={directions}
      onGetNewPath={this.props.onGetNewPath}
     />
    )
  }
}
AddPathMap.propTypes = {
  newPath: PropTypes.array,
};
export default connect(
 state => ({
   newPath: state.newPath,
 }), dispatch => ({
   onGetNewPath: (directions) => {
     dispatch(getNewPath(directions));
   },
 }))(AddPathMap);