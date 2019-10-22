import logo from './logo.svg';
import './App.css';
import React, {Component} from 'react';

import Travel from "./TravelComponent";

import Travels from "./Travels";

class App extends Component {
  render() {
    return (
        <div className="App">
          <Travel
              destination="Barcelona"
              country = "Spain"
              photo="https://cdn.pixabay.com/photo/2014/08/26/14/11/panorama-427997_960_720.jpg"
              distance="Road distance from Bucharest 2,760.8 km, 3h 20 min Flight"
        />
          <Travel
              destination="Bucharest"
              country = "Romania"
              photo="https://image.shutterstock.com/z/stock-photo-the-palace-of-the-parliament-bucharest-romania-614925701.jpg"
              distance="Road distance from Bucharest 0 km"
          />
          <Travels/>
        </div>
    );
  }
}

export default App;
