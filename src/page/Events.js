import React, { useEffect } from "react";

const heroContainer = {
  display: "grid",
  gridTemplateColumns: "repeat(4, 1fr)",
  gridTemplateRows: "repeat(2, 1fr)",
  gridTemplateAreas: `'main main one two' 'main main three four'`
};
const heroMain = {
  borderStyle: "solid",
  height: 600,
  gridArea: "main"
};
const heroOne = {
  borderStyle: "solid",
  gridArea: "one"
};
const heroTwo = {
  borderStyle: "solid",
  gridArea: "two"
};
const heroThree = {
  borderStyle: "solid",
  gridArea: "three"
};
const heroFour = {
  borderStyle: "solid",
  gridArea: "four"
};
const Events = () => {
  useEffect(() => {
    document.title = `Events`;
  }, []);
  return (
    <article>
      <div style={heroContainer} className="hero-container">
        <section className="hero-main" style={heroMain}>
          <header>
            <h2>Title of content</h2>
          </header>
        </section>
        <section className="hero-sm" style={heroOne}>
          <header>
            <h3>Title of content</h3>
          </header>
        </section>
        <section className="hero-sm" style={heroTwo}>
          <header>
            <h3>Title of content</h3>
          </header>
        </section>
        <section className="hero-sm" style={heroThree}>
          <header>
            <h3>Title of content</h3>
          </header>
        </section>
        <section className="hero-sm" style={heroFour}>
          <header>
            <h3>Title of content</h3>
          </header>
        </section>
      </div>
    </article>
  );
};

export default Events;