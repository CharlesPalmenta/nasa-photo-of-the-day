import React from "react";
import APODList from "./APODList";
import logo192 from "./logo192.png";
import "./App.css";
import { Button } from 'reactstrap';

function App() {
  return (
    <div className="App">
      <div className="logo_container">
        <img className="logo" src={logo192} alt="atom graphic" />
        <h1>NASA Picture of the Day</h1>
        <Button>Reactstrap Button</Button>
      </div>
      <APODList />
    </div>
  );
}

export default App;
