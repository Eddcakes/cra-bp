import React from "react";
import "./rules.css";

function Rules() {
  return (
    <section className="rules-section">
      <div className="container">
        <div className="rules-standard">
          <h3>Standard Rules</h3>
          <ul>
            <li>Elbow cannot be over the start of the table</li>
            <li>
              If the ball circles around the cup the defence can blow into the
              cup to make a save
            </li>
            <li>
              If the ball bounces off the rim and the defence makes a clean* one
              handed catch they sink any cup from the oponents side{" "}
            </li>
          </ul>
        </div>
        <div className="rules-house">
          <h3>House Rules</h3>
          <p>
            The host can set a rule that must be followed in every game - these
            rules take precedence over the Standard rules
          </p>
        </div>
      </div>
    </section>
  );
}

export default Rules;
