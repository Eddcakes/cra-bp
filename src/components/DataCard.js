import React from "react";

const DataCard = ({ data }) => (
  <section className="venue-section">{console.log({ data })}</section>
);
export default DataCard;

/*
(
    <section className="venue-section">
      <h2>{this.data.name}</h2>
      <div>
        <p>
          <span className="bold">Indoor:</span>{" "}
          {indoor === true ? "indoor" : "outside"}
        </p>
        <span className="bold underline">House rules</span>{" "}
        <ul className="house-rules">
          {houseRules.length > 0 ? (
            <li>{houseRules}</li>
          ) : (
              <li>There are no house rules</li>
            )}{" "}
        </ul>
      </div>
    </section>
  );

*/
