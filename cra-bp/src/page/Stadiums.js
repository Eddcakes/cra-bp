import React, { useEffect } from "react";
import { Builder } from "../components/Builder";
import data from "../data/venues.json";
const Stadiums = () => {
  useEffect(() => {
    document.title = `Stadiums`;
  }, []);
  return (
    <article className="page">
      <header>
        <h1>Stadiums</h1>
      </header>
      <div>
        <Builder venues={data} />
      </div>
    </article>
  );
};

export default Stadiums;
/*
      {venues.map((venue, i) => (
        <Venue key={i} {...venue} />
      ))}

       {console.log(data)}
      <Venue data={data}/>
 */
