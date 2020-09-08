import React from "react";
import "./menu.scss";
import ThemeContext from "../../ThemeContext";

function Menu() {
  return (
    <ThemeContext.Consumer>
      {tcConsumer => {
        return (
          <div className={`bar bar-${tcConsumer.theme.current}`}>
            <div>Menu should be the overflow for navigation </div>
            <div>Menu item</div>
            <div>Menu item</div>
          </div>
        );
      }}
    </ThemeContext.Consumer>
  );
}

export default Menu;
