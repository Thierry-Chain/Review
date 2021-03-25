import React, { Component } from "react";
//import {} from 'Two'
class One extends Component {
  state = { value: 0 };
  handleUp = () => {
    let valu = this.state.value;
    this.setState({ value: valu + 1 });
    // console.log(valu++)
  };
  handleDown = () => {
    let valu = this.state.value;
    this.setState({ value: valu - 1 });
    console.log("thierry  iramboant ");
    console.log("thierry  iramboant ");
    console.log("thierry  iramboant ");
  };
  render() {
    return (
      <div className="container">
        <ul className="list-group bg-secondary">
          <li className="list-group-item bg-gray">
            Item :{" "}
            <span className="badge badge-pill badge-primary">
              {this.state.value}
            </span>
            <div className="container">
              <button
                className="btn btn-md btn-info mx-2"
                onClick={this.handleUp}
              >
                Up
              </button>
              <button
                className="btn btn-md btn-success mx-2"
                onClick={this.handleDown}
              >
                Down
              </button>
              <button
                className="btn btn-md btn-danger mt-1 mx-2"
                onClick={() => {
                  //console.log(this.props.val)
                  this.props.OnHandleDelete(this.props.val);
                }}
              >
                Clear
              </button>
            </div>
          </li>
        </ul>
      </div>
    );
  }
}

export default One;
