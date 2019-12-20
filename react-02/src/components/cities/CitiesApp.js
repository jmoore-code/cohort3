import React, { Component } from "react";
import citiesPsc from "./citiespsc";
import CitiesController from "./CitiesController";
import CreateCityCard from "./CreateCityCard";
import fetchFunctions from "./citiesfetch";
import MapContainer from "./MapFunctions";

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
      message: "Please put in a city and valid lat-long coordinates"
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
      this.setState({ citiesArray: this.controller.cityList });
    } catch (err) {
      this.setState({ message: "Failed to connect to server" });
    }
  };

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
  
    // fetch functionality
    let newestCity = this.controller.cityList[
      this.controller.cityList.length - 1
    ];
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

  arrayUpdate = () => {
    this.setState({ citiesArray: this.controller.cityList });
  };

  cardDisplay = () => {
    return this.state.citiesArray.map(item => {
      return (
        <CreateCityCard
          key={item.key}
          cityObj={item}
          deleteCity={this.controller.deleteCity}
          fetchDelete={fetchFunctions.deleteData}
          fetchUpdate={fetchFunctions.updateData}
          arrayUpdate={this.arrayUpdate}
          messageUpdate={this.updateMessage}
        />
      );
    });
  };

  render() {
    return (
      <div className="mainContainer">
        <div className="controllerField">
          <p className="controllerTitle">Controller</p>
          <CitiesController
            handleChange={this.handleChange}
            cityName={this.state.cityName}
            lat={this.state.lat}
            lng={this.state.lng}
            population={this.state.population}
            handleClick={this.handleClick}
          />

          <div className="statsOutput">
            <p>Most Northern City: {this.controller.getMostNorthern()}</p>
            <p>Most Southern City: {this.controller.getMostSouthern()}</p>
            <p> Total Population: {this.controller.getPopulation()}</p>
          </div>
          <br />
          <p className="messageOutput">{this.state.message}</p>
        </div>

        <div className="cityCardContainer">
          <p>Cities</p>
          <this.cardDisplay />
        </div>

        <div className="parentMapContainer">
        <br />
        <br />
        <p></p>
          <MapContainer citiesArray={this.state.citiesArray} />
        </div>
      </div>
    );
  }
}

export default CitiesApp;
