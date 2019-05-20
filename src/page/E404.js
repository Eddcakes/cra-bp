import React, { useEffect } from "react";

const E404 = () => {
  useEffect(() => {
    document.title = `e404`;
  }, []);
  return (
    <article>
      <p>404 page not found</p>
    </article>
  );
};

export default E404;
