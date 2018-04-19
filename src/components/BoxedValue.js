import React from "react";

const BoxedValue = props => (
  <div className="boxedVals">
    <div>
      <h2>{props.boxedValue.city} </h2>{" "}
    </div>
    <div>
      <h2>
        {props.boxedValue.low} - {props.boxedValue.high}{" "}
      </h2>{" "}
    </div>
    <div>
      <h2>
        <img src={props.boxedValue.weatherIcon} />{" "}
      </h2>{" "}
    </div>
  </div>
);

export default BoxedValue;
