import React from "react";

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
