import React, { useEffect } from "react";
import ThemeContext from "../ThemeContext";

function SelectTheme(props) {
  useEffect(() => {
    document.title = `Settings`;
  }, []);
  return (
    <ThemeContext.Consumer>
      {tcConsumer => {
        return (
          <div>
            <p>Theme Selected: {tcConsumer.theme.theme}</p>
            <select onChange={tcConsumer.click}>
              <option value="sak"> Sakura Theme </option>
              <option value="vb"> Victoria Bitter Theme </option>
            </select>
          </div>
        );
      }}
    </ThemeContext.Consumer>
  );
}

export const TestPage = () => {
  return (
    <article>
      <SelectTheme />
    </article>
  );
};
