import React from "react";

class CreateCityCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cityObj: this.props.cityObj,
      population: ""
    };
  }

  handleChange = event => {
    this.setState({
      population: Number(event.target.value)
    });
  };

  handleClickMoveIn = () => {
    this.state.cityObj.moveIn(this.state.population);
    this.props.fetchUpdate(this.state.cityObj);
    this.setState({
      population: ""
    });
    this.props.arrayUpdate();
  };

  handleClickMoveOut = () => {
    this.state.cityObj.moveOut(this.state.population);
    this.props.fetchUpdate(this.state.cityObj);
    this.setState({
      population: ""
    });
    this.props.arrayUpdate();
  };

  handleClickDelete = event => {
    let targetKey = Number(event.target.parentNode.id);
    this.props.deleteCity(targetKey);
    this.props.messageUpdate();
    this.props.fetchDelete({ key: targetKey });
    this.props.arrayUpdate();
  };

  render() {
    return (
      <div className="cityCard" id={this.props.cityObj.key}>
        <p>{this.props.cityObj.city}</p>
        <input
          className="citiesInput"
          type="number"
          onChange={this.handleChange}
          name={this.props.cityObj.name}
          value={this.state.population}
        ></input>
        <br />
        <button className="citiesButton" onClick={this.handleClickMoveIn}>Move In</button>
        <button className="citiesButton" onClick={this.handleClickMoveOut}>Move Out</button>
        <button className="citiesButton" onClick={this.handleClickDelete}>Delete</button>
        <div>
          Latitude: {this.props.cityObj.lat}, Longitude:{" "}
          {this.props.cityObj.long}, Population: {this.props.cityObj.pop}, Size:{" "}
          {this.props.cityObj.howBig()}
        </div>
      </div>
    );
  }
}

export default CreateCityCard;
