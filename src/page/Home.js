import React, { useEffect } from "react";

const Home = () => {
  useEffect(() => {
    document.title = `Home Page`;
  }, []);
  return (
    <article>
      <p>Home Page</p>
    </article>
  );
};

export default Home;
