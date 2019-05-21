import React, { useState, useEffect } from "react";
import ThemeContext from "./ThemeContext";

function Provider(props) {
  const [theme, setTheme] = useState({ current: "sak", last: "" });
  const changeTheme = event => {
    setTheme({ current: event.target.value, last: theme.current });
  };
  useEffect(() => {
    let bodyClasses = document.body.classList;
    !theme.last.length > 0
      ? bodyClasses.add(`body-${theme.current}`)
      : bodyClasses.replace(`body-${theme.last}`, `body-${theme.current}`);
  }, [theme]);
  return (
    <ThemeContext.Provider value={{ theme: theme, click: changeTheme }}>
      {props.children}
    </ThemeContext.Provider>
  );
}

export default Provider;
//maybe some good shit here? https://www.youtube.com/watch?v=oILEx3hROps