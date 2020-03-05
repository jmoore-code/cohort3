import React, { Component, Fragment } from "react";
import citiesPsc from "./citiespsc";
import CitiesController from "./CitiesController";
import CreateCityCard from "./CreateCityCard";
import fetchFunctions from "./citiesfetch";
import MapContainer from "./MapFunctions";
import { MyContext } from "../context/ThemeContext";
import "./citiesapp.css";
import Popup from "reactjs-popup";

const InfoPopup = () => (
  <Popup trigger={<button className="button"> Information </button>} modal>
    {close => (
      <div className="modal">
        <button className="close" onClick={close}>
          &times;
        </button>
        <div className="header"></div>
        <div className="content">
          {" "}
          <p>
            The "Cities" exercise was very similar to the previous "Bank Accounts" exercise
            to teach us some of the core ways to use classes in JavaScript and display cards. It also asked us
            to store the data created in a simulated server database using a pre built Api. 
            I took the exercise a bit farther and also linked in the Google Maps Api to 
            dynamically create pins.  
          </p>
          <p>
            Enter a city name and a valid lat-long. The city name and coordinates do not need
            to match real world cities, make one up if you like.
          </p>
        </div>
        <div className="actions">
          <button
            className="button"
            onClick={() => {
              console.log("modal closed ");
              close();
            }}
          >
            close
          </button>
        </div>
      </div>
    )}
  </Popup>
);

class CitiesApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cityName: "",
      lat: "",
      lng: "",
      population: "",
      citiesArray: [],
      message: "Please put in a city and valid lat-long coordinates",
      center: { lat: 51.0447, lng: -114.0719 }
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
      this.setState({
        message: "Please put in a city and valid lat-long coordinates"
      }); //Failed to connect to server
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
      center: { lat: this.state.lat, lng: this.state.lng },
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

  cardClick = (lat, lng) => {
    this.setState({ center: { lat: lat, lng: lng } });
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
          cardClick={this.cardClick}
        />
      );
    });
  };

  render() {
    return (
      <MyContext.Consumer>
        {myContext => (
          <Fragment>
            <div
              className="mainContainer"
              style={{
                ...{ color: myContext.textTheme },
                ...{ fontStyle: myContext.textItalicsTheme }
              }}
            >
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
                <div className="info-modal" style={{ color: "black" }}>
                  <InfoPopup />
                </div>
              </div>

              <div className="cityCardContainer">
                <p>Cities</p>
                <this.cardDisplay />
              </div>

              <div className="parentMapContainer">
                <br />
                <br />
                <p></p>
                <MapContainer
                  center={this.state.center}
                  citiesArray={this.state.citiesArray}
                />
              </div>
            </div>
          </Fragment>
        )}
      </MyContext.Consumer>
    );
  }
}

export default CitiesApp;
