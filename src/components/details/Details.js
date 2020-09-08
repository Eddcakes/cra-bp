import React from "react";
import { NavLink } from "react-router-dom";
import "./details.scss";
import ThemeContext from "../../ThemeContext";
function SearchBox() {
  return (
    <input className="search" type="search" placeholder="yassss queen🔍" />
  );
}
function Details() {
  return (
    <ThemeContext.Consumer>
      {tcConsumer => {
        return (
          <div className={`details details-${tcConsumer.theme.current}`}>
            <div className="icon">
              <span role="img" aria-label="user icon placeholder">
                🧙‍♂️
              </span>
            </div>
            <SearchBox />
            <div className={`nav-item nav-li-${tcConsumer.theme.current}`}>
                <NavLink
                  to="/TestPage"
                  className={`nav-link nav-link-${tcConsumer.theme.current}`}
                >
                  TestPage
                </NavLink>
              </div>
            <div>deet</div>
          </div>
        );
      }}
    </ThemeContext.Consumer>
  );
}
export default Details;
