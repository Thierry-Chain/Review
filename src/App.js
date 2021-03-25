import React, { Component } from "react";
import "./App.css";
import One from "./one";
import Two from "./Two";
import { Route, NavLink } from "react-router-dom";

class App extends Component {
  state = { all: [10, 20, 30] };

  handleDelete = (id) => {
    //console.log(id)
    let new2 = this.state.all.filter((num) => num !== id);
    console.log("new", new2);
    this.setState({ all: new2 });
  };
  handleReset = () => {
    this.setState({ all: [0.01, 0.052, 0.41] });
  };
  render() {
    return (
      <div className="App">
        <nav className="navbar navbar-light bg-light">
          <p className="navbar-brand">
            <NavLink to="/">Review</NavLink>
          </p>
          <p className="text-dark">
            <NavLink to="/mgn">Go now</NavLink>
          </p>
          <p className="text-dark">
            <NavLink to="/">Back now</NavLink>
          </p>
        </nav>
        <p className="bg-gray">
          <button onClick={this.handleReset} className="btn btn-md btn-gray">
            Reset
          </button>
        </p>

        {this.state.all.map((num) => {
          return (
            <One
              val={num}
              OnHandleDelete={(id) => this.handleDelete(id)}
              key={num}
            />
          );
        })}
        <Route path="/mgn" component={Two} />
      </div>
    );
  }
}

export default App;
