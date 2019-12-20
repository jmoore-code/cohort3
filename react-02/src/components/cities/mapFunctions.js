import React from "react"
import {Map, GoogleApiWrapper, Marker} from 'google-maps-react'

const mapStyles = {
    width: "100%",
    height: "100%",
}

class MapContainer extends React.Component {

    displayMakers = () => {
        // console.log(this.props.citiesArray)
        return this.props.citiesArray.map((city, index) => {
            return <Marker 
                        key={index} 
                        id={city.city} 
                        position={{
                            lat: city.lat,
                            lng: city.long
                        }}
                    />    
        })
    }
    render() {
        return (
            <div className="componentMapContainer" > 
                <Map 
                google={this.props.google}
                zoom={5.7}
                style={mapStyles}
                initialCenter={{lat: 51.0447, lng: -114.0719}}
                >
                {this.displayMakers()}
                </Map>
            </div>
            
            
        )
    }
}

export default GoogleApiWrapper({
    apiKey: "AIzaSyAGD2vT4LoMqnzQvPkaLyLR8N2VFVAWVOA"
})(MapContainer);