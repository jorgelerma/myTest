import React, { Component } from "react";
import { render } from "react-dom";
import Hello from "./Hello";
import $ from "jquery";
import CitiesList from "./components/CitiesList";
import BoxedValue from "./components/BoxedValue";

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      values: ["k"],
      boxedValue: 0
    };
    this.onClicked = this.onClicked.bind(this);
  }

  componentDidMount() {
    this.getValues();
  }
  onClicked(e, x) {
    // this.setState({
    //   boxedValue: e
    // });
    this.setState({ boxedValue: e });
    console.log("xxx" + e);
  }

  getValues() {
    $.ajax({
      url: "https://next.json-generator.com/api/json/get/NyszXwghN",
      method: "GET",
      success: results => {
        // console.log(typeof results)
        console.log(results);

        this.setState({ values: results });
      },
      error: (xhr, err) => {
        console.log("err", err);
      }
    });
  }

  render() {
    return (
      <div style={styles}>
        <h2>The Weather App {"\u2728"}</h2>

        <div>
          <CitiesList values={this.state.values} onClicked={this.onClicked} />
        </div>
        <div>
          <BoxedValue boxedValue={this.state.boxedValue} />
        </div>
      </div>
    );
  }
}
// const App = () => (
//   <div style={styles}>
//     <Hello name="CodeSandbox" />
//     <h2>Start editing to see some magic happen {'\u2728'}</h2>
//   </div>
// );

render(<App />, document.getElementById("root"));
