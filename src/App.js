import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./styles.scss";

import Navbar from "./components/navbar/Navbar";
import Details from "./components/details/Details";
import Menu from "./components/menu/Menu";
import Home from "./page/Home";
import About from "./page/About";
import Events from "./page/Events";
import Stadiums from "./page/Stadiums";
import Forms from "./page/Forms";
import E404 from "./page/E404";
import { TestPage } from "./page/TestPage";
import Provider from "./Provider";

function App() {
  return (
    <Provider>
      <div className="App">
        <BrowserRouter>
          <Navbar />
          <main className="main">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/about" component={About} />
              <Route path="/events" component={Events} />
              <Route path="/stadiums" component={Stadiums} />
              <Route path="/testPage" component={TestPage} />
              <Route path="/forms" component={Forms} />
              <Route component={E404} />
            </Switch>
          </main>
          <Menu />
          <Details />
        </BrowserRouter>
      </div>
    </Provider>
  );
}

export default App;
