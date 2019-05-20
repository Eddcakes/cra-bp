import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "../Logo";
import "./navbar.scss";
import ThemeContext from "../../ThemeContext";

/* Maybe i should look at react router for this */

function Navbar(props) {
  return (
    <ThemeContext.Consumer>
      {tcConsumer => {
        return (
          <div className={`nav-bar nav-bar-${tcConsumer.theme.current}`}>
            <div className="nav-item">
              <Logo />{" "}
            </div>
            <nav>
              <div className="nav-item">
                <NavLink
                  to="/"
                  className={`nav-link nav-link-${tcConsumer.theme.current}`}
                >
                  Home
                </NavLink>
              </div>
              <div className={`nav-item nav-li-${tcConsumer.theme.current}`}>
                <NavLink
                  to="/About"
                  className={`nav-link nav-link-${tcConsumer.theme.current}`}
                >
                  About
                </NavLink>
              </div>
              <div className={`nav-item nav-li-${tcConsumer.theme.current}`}>
                <NavLink
                  to="/Events"
                  className={`nav-link nav-link-${tcConsumer.theme.current}`}
                >
                  Events
                </NavLink>
              </div>
              <div className={`nav-item nav-li-${tcConsumer.theme.current}`}>
                <NavLink
                  to="/Stadiums"
                  className={`nav-link nav-link-${tcConsumer.theme.current}`}
                >
                  Stadiums
                </NavLink>
              </div>
              <div className={`nav-item nav-li-${tcConsumer.theme.current}`}>
                <NavLink
                  to="/TestPage"
                  className={`nav-link nav-link-${tcConsumer.theme.current}`}
                >
                  TestPage
                </NavLink>
              </div>
            </nav>
          </div>
        );
      }}
    </ThemeContext.Consumer>
  );
}

export default Navbar;
/*
anchors:
<a href="/">Home</a>
<a href="/About">About</a>
<a href="/Events">Events</a>
<a href="/Stadiums">Stadiums</a>
 */
/* 
function Navbar(props) {
  return (
    <ThemeContext.Consumer>
      {tcConsumer => {
        return (
          <div className={`nav-bar nav-bar-${tcConsumer.theme.current}`}>
            <Logo />
            <nav className="toolbar-nav">
              <ul>
                <div className={`nav-item nav-li-${tcConsumer.theme.current}`}>
                  <NavLink
                    to="/"
                    className={`nav-link nav-link-${tcConsumer.theme.current}`}
                  >
                    Home
                  </NavLink>
                </div>
                <div className={`nav-item nav-li-${tcConsumer.theme.current}`}>
                  <NavLink
                    to="/About"
                    className={`nav-link nav-link-${tcConsumer.theme.current}`}
                  >
                    About
                  </NavLink>
                </div>
                <div className={`nav-item nav-li-${tcConsumer.theme.current}`}>
                  <NavLink
                    to="/Events"
                    className={`nav-link nav-link-${tcConsumer.theme.current}`}
                  >
                    Events
                  </NavLink>
                </div>
                <div className={`nav-item nav-li-${tcConsumer.theme.current}`}>
                  <NavLink
                    to="/Stadiums"
                    className={`nav-link nav-link-${tcConsumer.theme.current}`}
                  >
                    Stadiums
                  </NavLink>
                </div>
                <div className={`nav-item nav-li-${tcConsumer.theme.current}`}>
                  <NavLink
                    to="/TestPage"
                    className={`nav-link nav-link-${tcConsumer.theme.current}`}
                  >
                    TestPage
                  </NavLink>
                </div>
              </ul>
            </nav>
            <div className={"nav-search"}>searchbox</div>
          </div>
        );
      }}
    </ThemeContext.Consumer>
  );
}
*/
