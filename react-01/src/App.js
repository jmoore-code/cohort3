import React from 'react';
import logo from './logo.svg';
import {MyComponent, OddComponent, EvenComponent} from './components/MyComponent'
import './App.css';


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      myState: "TBD"
    };
    this.counter = 21;
    this.evenOdd = "TBD"
  }
  
  onPushMe = () => {
    
    this.counter = this.counter + 1
    console.log(this.counter)
    this.setState({myState: "now:" + this.counter})

    const num = this.counter
    if (num & 1) {
      this.evenOdd = <OddComponent />
   } else {
       this.evenOdd = <EvenComponent />
   }
  }



  
  render () {


    return (
      <div className="App">
      <header className="App-header">
      <MyComponent whatToSay="What Ever" /> 
      {this.evenOdd}

      <button onClick={this.onPushMe}>Push Me</button>
        <img src={logo} className="App-logo" alt="logo" />
        <h1>I am in control of this application and my name is Jason {this.state.myState} </h1>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
    )
  }
}









export default App;
