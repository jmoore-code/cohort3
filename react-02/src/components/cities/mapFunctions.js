import React from "react"
import {Map, GoogleApiWrapper} from 'google-maps-react'

// const mapStyles = {
//     width: "100%",
//     height: "100%",
// }

class MapContainer extends React.Component {
    render() {
        return (
            <div> 
                <Map 
                google={this.props.google}
                zoom={8}
                // style={mapStyles}
                initialCenter={{lat: 51.0447, lng: -114.0719}}
                />
            </div>
            
            
        )
    }
}

export default GoogleApiWrapper({
    apiKey: "AIzaSyAGD2vT4LoMqnzQvPkaLyLR8N2VFVAWVOA"
})(MapContainer);