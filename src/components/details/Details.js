import React from "react";
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
            <div>deet</div>
            <div>deet</div>
          </div>
        );
      }}
    </ThemeContext.Consumer>
  );
}
export default Details;
