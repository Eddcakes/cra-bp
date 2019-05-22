import React, { useState, useEffect } from "react";
import ThemeContext from "./ThemeContext";

function Provider(props) {
  const [theme, setTheme] = useState( () => {
    let localTheme
    try{
      localTheme = window.localStorage.getItem("bp:theme") || "sak"
    }catch (err){
      localTheme = "sak"
    }
    return {current: localTheme, last: ""}
  });
  const changeTheme = event => setTheme({ current: event.target.value, last: theme.current });
  useEffect(() => {
    window.localStorage.setItem("bp:theme", theme.current)
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