import React from "react"
import {Map, GoogleApiWrapper, Marker, InfoWindow} from 'google-maps-react'

const mapStyles = {
    width: "100%",
    height: "100%",
}

class MapContainer extends React.Component {
    constructor() {
        super()
        this.state = {
            showingInfoWindow: false,
            activeMarker: {},
            selectedPlace: {}
        }
    }
    onMarkerClick = (props, marker, e) => {
        this.setState({
            selectedPlace: props,
            activeMarker: marker,
            showingInfoWindow: true
          });
          console.log(this.state)
    }


    onClose = props => {
        if (this.state.showingInfoWindow) {
        this.setState({
            showingInfoWindow: false,
            activeMarker: null
        });
        }
    };
     

    displayMakers = () => {
        // console.log(this.props.citiesArray)
        return this.props.citiesArray.map((city, index) => {
            return <Marker 
                        key={index} 
                        onClick={this.onMarkerClick}
                        name={city.city}
                        position={{
                            lat: city.lat,
                            lng: city.long
                        }}
                    />

            
   
        })
    }
    render() {
        return (
                <Map 
                google={this.props.google}
                zoom={5.7}
                style={mapStyles}
                initialCenter={{lat: 51.0447, lng: -114.0719}}
                >
                {this.displayMakers()}
                <InfoWindow
                        marker={this.state.activeMarker}
                        visible={this.state.showingInfoWindow}
                        onClose={this.onClose}
                     >
                     <div>
                         <h4>{this.state.selectedPlace.name}</h4>
                     </div>
                </InfoWindow> 
                </Map>
        )
    }
}

export default GoogleApiWrapper({
    apiKey: "AIzaSyAGD2vT4LoMqnzQvPkaLyLR8N2VFVAWVOA"
})(MapContainer);