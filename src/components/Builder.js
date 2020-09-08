import React from "react";
import Venue from "./Venues";
//this needs renaming next clean up task

export const Builder = ({ venues }) => (
  <article>
    <div className="container">
      {venues.map((venue, i) => (
        <Venue key={i} {...venue} />
      ))}
    </div>
  </article>
);
