import React, { useState } from 'react';

/* 
participant = [
  {
    "name": "Edward",
    "seed": 1
  },{

  }
]
*/

function Bracket() {
  const [count, setCount] = useState([0]);
  const [participant, setparticipant] = useState([]);
  return (
    <div>
      <form>
        {count.map((num) => {
          return <UserForm />;
        })}
      </form>
      <div>going to try do calcs and simple form here ya no</div>
    </div>
  );
}

export default Bracket;

function UserForm() {
  return (
    <>
      <label></label>
      <input />
    </>
  );
}
