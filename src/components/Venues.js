import React from "react";
import { NavLink } from "react-router-dom";
//venue section - can we turn this into a
//deconstruct the data passed in
/*export const Venue = ({
  ID,
  name,
  indoor,
  est,
  pitchSize,
  location,
  houseRules
}) => (
  <section className="venue-section">
    <h2>{name}</h2>
    <div>
      <p>
        <span className="bold">Indoor:</span>{" "}
        {indoor === true ? "indoor" : "outside"}
      </p>
      <p>
        <span className="bold underline">House rules</span>{" "}
        <ul className="house-rules">
          {houseRules.length > 0 ? (
            <li>{houseRules}</li>
          ) : (
            <li>There are no house rules</li>
          )}{" "}
        </ul>
      </p>
    </div>
  </section>
);
*/
/*
class Venue extends React.Component{
  constructor(props){
    super(props)
  }
  render(){
    return(
      <section className="venue-section">
        <h2>{this.props.name}</h2>
        <div>
          <p>
            <span className="bold">Indoor:</span>{" "}
            {this.props.indoor === true ? "indoor" : "outside"}
          </p>
          <p>
            <span className="bold underline">House rules</span>{" "}
            <ul className="house-rules">
              {this.props.houseRules.length > 0 ? (
                <li>{this.props.houseRules}</li>
              ) : (
                  <li>There are no house rules</li>
                )}{" "}
            </ul>
          </p>
        </div>
      </section>
    )
  }
}*/
//do i need to do something with set state to get my click e
function Venue(props) {
  function handleClick(e) {
    console.log(props);
  }
  return (
    <section className="venue-section" onClick={handleClick}>
      <h2>{props.name}</h2>
      <div>
        <p>
          <span className="bold">Indoor:</span>{" "}
          {props.indoor === true ? "indoor" : "outside"}
        </p>
        <span className="bold underline">House rules</span>{" "}
        <ul className="house-rules">
          {props.houseRules.length > 0 ? (
            <li>{props.houseRules}</li>
          ) : (
            <li>There are no house rules</li>
          )}{" "}
        </ul>
      </div>
    </section>
  );
}

export default Venue;
