// import React from "react";
import React, { Component } from "react";

class CitiesList extends Component {
  // class CitiesList import Component{
  constructor(props) {
    super(props);

    this.state = {
      currentValue: ""
    };

    this.onClickx = this.onClickx.bind(this);
  }

  onClickx(input) {
    console.log(" clicked: " + input);
  }

  render() {
    return (
      <div>
        <div>
          {this.props.values.map(item => (
            <div>
              <div>
                <li onClick={this.props.onClicked.bind(this, item)}>
                  <h3>
                    {item.city} {item.low} &deg;C- {item.high} &deg;C{" "}
                  </h3>
                </li>
              </div>
            </div>
          ))}{" "}
        </div>
      </div>
    );
  }
}

// const CitiesList = props => (
//   <div>
//     <div>{props.values.map(item => (
//       <li onClick={props.onClicked(item)}>{item.city}</li>
//     ))} </div>
//   </div>
// );

export default CitiesList;
