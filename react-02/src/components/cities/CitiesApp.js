import React, { Component } from "react";
import citiesPsc from "./citiespsc";
import CreateCityCard from "./CreateCityCard";
import fetchFunctions from "./citiesfetch"
// import MapContainer from "./mapFunctions";

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
      <div>
        <div className="wrapperVertical">
          <div className="boxVertical">
            <div className="wrapper">
              <div className="box1">
                <p>Controller</p>
                City:
                <input
                  name="cityName"
                  type="text"
                  id="idCityInput"
                  onChange={this.handleChange}
                  value={this.state.cityName}
                />
                <br />
                Latitude:
                <input
                  name="lat"
                  type="number"
                  id="idLatInput"
                  onChange={this.handleChange}
                  value={this.state.lat}
                />
                <br />
                Longitude:
                <input
                  name="lng"
                  type="number"
                  id="idLongInput"
                  onChange={this.handleChange}
                  value={this.state.lng}
                />
                <br />
                Population:
                <input
                  name="population"
                  type="number"
                  id="idPopInput"
                  onChange={this.handleChange}
                  value={this.state.population}
                />
                <br />
                <button id="idCityCreateButton" onClick={this.handleClick}>
                  Create City
                </button>
                <br />
                <div className="statsOutput">
                  <p>Most Northern City: {this.controller.getMostNorthern()}</p>
                  <p>Most Southern City: {this.controller.getMostSouthern()}</p>
                  <p> Total Population: {this.controller.getPopulation()}</p>
                </div>
                <br />
                <p id="idOutputField">{this.state.message}</p>
              </div>
              <div className="handler"></div>
              <div className="box2 map" id="idMap">
                {/* <MapContainer /> */}
                Map
              </div>
            </div>
          </div>
          <div className="handlerVertical"></div>
          <div className="boxVertical rightVerticalBox" id="idCityGrid">
            <this.cardDisplay />
          </div>
        </div>
      </div>
    );
  }
}

export default CitiesApp;
