import React from "react"

class CreateCityCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cityObj: this.props.cityObj,
            population: "",
        }
    }

handleChange = event => {
    this.setState({
        population: Number(event.target.value)
    })
}

handleClickMoveIn = () => {
    this.state.cityObj.moveIn(this.state.population);
    this.props.fetchUpdate(this.state.cityObj)
    this.setState({
        population: ""
    });
    this.props.forceUpdate()
};

handleClickMoveOut = () => {
    this.state.cityObj.moveOut(this.state.population);
    this.props.fetchUpdate(this.state.cityObj)
    this.setState({
        population: ""
    })
    this.props.forceUpdate()
}

handleClickDelete = (event) => {
    let targetKey = Number(event.target.parentNode.id)
    this.props.deleteCity(targetKey)
    this.props.messageUpdate();
    this.props.fetchDelete({key: targetKey} )
}


    

    render() {
        return (
            <div className="cityCard" id={this.props.cityObj.key}>
                <p>{this.props.cityObj.city}</p>
                <input
                    type="number"
                    // min="0"
                    onChange={this.handleChange}
                    name={this.props.cityObj.name}
                    value={this.state.population}
                    ></input>
                 <button onClick={this.handleClickMoveIn}>Move In</button>   
                 <button onClick={this.handleClickMoveOut}>Move Out</button>
                 <button onClick={this.handleClickDelete}>Delete</button>
                <div>
                    Latitude: {this.props.cityObj.lat}, Longitude: {this.props.cityObj.long}, 
                    Population: {this.props.cityObj.pop}, Size: {this.props.cityObj.howBig()} 
                </div>
            </div>
        )
    }
}

export default CreateCityCard