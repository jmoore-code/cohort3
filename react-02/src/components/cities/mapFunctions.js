import React from "react"
import {Map, GoogleApiWrapper, Marker} from 'google-maps-react'

const mapStyles = {
    width: "50%",
    height: "50%",
}

class MapContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cities: []
        }
    }

    componentWillReceiveProps = () => {
        this.setState({
            cities: this.props.citiesArray
        })
    }


    displayMakers = () => {
        console.log(this.state.cities)
        return this.state.cities.map((city, index) => {
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
            <div className="mapContainer"> 
                <Map 
                google={this.props.google}
                zoom={8}
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