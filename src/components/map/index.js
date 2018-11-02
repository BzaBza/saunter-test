import React from "react"
import {compose, withProps} from "recompose"
import {connect} from "react-redux";
import {withScriptjs, withGoogleMap, GoogleMap, Marker, Polyline} from "react-google-maps"
import {getCurrentPath} from "../../redux-stuff/actions/currentPath";

class Map extends React.PureComponent {
  state = {
    isMarkerShown: false,
  };

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
    const MyMapComponent = compose(
     withProps({
       googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyArFoYz5gvVCKMaAUr-qH29gFdtx7Lp1Dk&callback=initMap",
       loadingElement: <div style={{height: `100%`}}/>,
       containerElement: <div style={{height: `80vh`}}/>,
       mapElement: <div style={{height: `100%`}}/>,
     }),
     withScriptjs,
     withGoogleMap,
    )((props) =>
     <GoogleMap
      defaultZoom={14}
      defaultCenter={{lat: 40.737102, lng: -73.990318}}
      onClick={(e) => console.log(e)}
     >
       <Polyline
        path={[
          {lat: 40.737102, lng: -73.990318},
          {lat: 40.749825, lng: -73.987963},
          {lat: 40.752946, lng: -73.987384},
          {lat: 40.755823, lng: -73.986397},
        ]}
        geodesic={true}
        options={{
          strokeColor: "#ff2527",
          strokeOpacity: 0.75,
          strokeWeight: 2,
          icons: [
            {
              offset: "0",
              repeat: "20px"
            }
          ]
        }}
       />

       {props.isMarkerShown &&
       <Marker position={{lat: Number(this.props.currentPathData.lat), lng: Number(this.props.currentPathData.lng)}}
               onClick={props.onMarkerClick}/>}

     </GoogleMap>
    );
    return (
     <MyMapComponent
      isMarkerShown={this.state.isMarkerShown}
      onMarkerClick={this.handleMarkerClick}
     />
    )
  }
}

export default connect(
 state => ({
   currentPathData: state.currentPathData,
 }), dispatch => ({
   onGetCurrentPath: (pathData) => {
     dispatch(getCurrentPath(pathData));
   }
 }))(Map);