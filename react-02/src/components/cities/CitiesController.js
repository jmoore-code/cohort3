import React from "react";

class CitiesController extends React.Component {


  render() {
    return (
      <div className="citiesController">
        <div className="controllerInputs">
          City:
          <input
            className="citiesInput"
            name="cityName"
            type="text"
            onChange={this.props.handleChange}
            value={this.props.cityName}
          />
          <br />
          Latitude:
          <input
            className="citiesInput"
            name="lat"
            type="number"
            onChange={this.props.handleChange}
            value={this.props.lat}
          />
          <br />
          Longitude:
          <input
            className="citiesInput"
            name="lng"
            type="number"
            onChange={this.props.handleChange}
            value={this.props.lng}
          />
          <br />
          Population:
          <input
            className="citiesInput"
            name="population"
            type="number"
            onChange={this.props.handleChange}
            value={this.props.population}
          />
        </div>
        <br />
        <button className="citiesButton" onClick={this.props.handleClick}>
          Create City
        </button>
        <br />
      </div>
    );
  }
}

export default CitiesController;
