import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class SimpleMap extends Component {
  static defaultProps = {
    center: {
      lat: 59.95,
      lng: 30.33
    },
    zoom: 11
  };

  render() {
    return (
     <div style={{ height: '80vh', width: '100%' }}>
       <GoogleMapReact
        bootstrapURLKeys={{ key: 'AIza-uiopasdfghjklzxcvbnm'}}
        defaultCenter={this.props.center}
        defaultZoom={this.props.zoom}
       >
         <AnyReactComponent
          lat={59.955413}
          lng={30.337844}
         />
       </GoogleMapReact>
     </div>
    );
  }
}

export default SimpleMap;