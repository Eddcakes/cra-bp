import React, { useEffect } from "react";
import data from "../data/tournaments.json";
import venueData from "../data/venues.json";
import personData from "../data/actors.json";

function Events(){
  useEffect(() => {
    document.title = `Events`;
  }, []);
  return (
    <article>
      {data.map( tournament => (
        <Event key={tournament._id} {...tournament}/>
      ))
      }
    </article>
  );
};
function Event({event, date, venue_id, winner_id, runnerUp_id, ...props}){
  return(
    <article>
      <h1>{event}</h1>
      <div>{date}</div>
      <div>{lookupVenue(venue_id)}</div>
      <div>Winnder: {lookupPerson(winner_id)}</div>
      <div>Runner up: {lookupPerson(runnerUp_id)}</div>
    </article>
  )
}

function lookupPerson(id){
  let actor = personData.filter( person => person.id === id )
  return actor[0].name
}
function lookupVenue(id){
  let place = venueData.filter( venue => venue.ID === id )
  return place[0].name
}

export default Events;