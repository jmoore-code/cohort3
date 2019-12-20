import React, { Component } from "react";
import citiesPsc from "./citiespsc";
import CreateCityCard from "./CreateCityCard";
import fetchFunctions from "./citiesfetch"
import MapContainer from "./mapFunctions";

import "./citiesapp.css";

class CitiesApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
     
      cityName: "",
      lat: "",
      lng: "",
      population: "",
      citiesArray: [],
      message: "Please put in your first city"
    };
    this.controller = new citiesPsc.community();
  }

  componentDidMount = async () => {
      try {
          let citiesJSON = await fetchFunctions.getData();
          citiesJSON.forEach(el => {
              this.controller.cityList.push(
                  new citiesPsc.city(el.key, el.city, el.lat, el.long, el.pop)
              );
              this.controller.keyCounter = this.controller.getHighestKey() + 1;
          });
          this.setState({citiesArray: this.controller.cityList})
      }
      catch(err) {
          
          this.setState({message: "Failed to connect to server"})
      }
  }

  handleClick = () => {
    this.controller.createCity(
      this.state.cityName,
      this.state.lat,
      this.state.lng,
      this.state.population
    );
    this.setState({
      
      cityName: "",
      lat: "",
      lng: "",
      population: "",
      citiesArray: this.controller.cityList,
      message: this.controller.message
    });
    let newestCity = this.controller.cityList[this.controller.cityList.length - 1];
    // console.log(newestCity)
    fetchFunctions.addData(newestCity);
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  updateMessage = () => {
    this.setState({ message: this.controller.message });
  };

  forceUpdate = () => {
    this.setState({ state: this.state });
  };

  cardDisplay = () => {
    return this.controller.cityList.map(item => {
      return (
        <CreateCityCard
        
          key={item.key}
          cityObj={item}
          deleteCity={this.controller.deleteCity}
          fetchDelete={fetchFunctions.deleteData}
          fetchUpdate={fetchFunctions.updateData}
          forceUpdate={this.forceUpdate}
          messageUpdate={this.updateMessage}
        />
      );
    });
  };

  render() {
    return (
      <div className="mainContainer">
        <div className="controllerField" >
            <p className="controllerTitle">Controller</p>
                <div className="controllerInputs">
                City:
                <input
                    className="citiesInput"
                    name="cityName"
                    type="text"
                    onChange={this.handleChange}
                    value={this.state.cityName}
                    />
                    <br />
                    Latitude:
                    <input
                    className="citiesInput"
                    name="lat"
                    type="number"
                    onChange={this.handleChange}
                    value={this.state.lat}
                    />
                    <br />
                    Longitude:
                    <input
                    className="citiesInput"
                    name="lng"
                    type="number"
                    onChange={this.handleChange}
                    value={this.state.lng}
                    />
                    <br />
                    Population:
                    <input
                    className="citiesInput"
                    name="population"
                    type="number"
                    onChange={this.handleChange}
                    value={this.state.population}
                    />
                </div>
                    

                    <br />
                    <button className="citiesButton" onClick={this.handleClick}>
                    Create City
                    </button>
                    <br />
                    <div className="statsOutput">
                    <p>Most Northern City: {this.controller.getMostNorthern()}</p>
                    <p>Most Southern City: {this.controller.getMostSouthern()}</p>
                    <p> Total Population: {this.controller.getPopulation()}</p>
                    </div>
                    <br />
                    <p className="messageOutput">{this.state.message}</p>
        </div>

        <div className="cityCardContainer" >
            <p>Cities</p>
            <this.cardDisplay />       
            </div>
       
        <div className="mapContainer" >
                <MapContainer citiesArray={this.state.citiesArray}/>
                Map
        </div>


       
    </div>
              
             
    


    );
  }
}

export default CitiesApp;
