import React, {useState} from "react";
import "./match.scss";
import ThemeContext from "../ThemeContext"

function Match(){
  const [input, setInput] = useState('')
  return (
    <ThemeContext.Consumer>
      {consumer => {
        return (
          <div className="form">
          <form className={`form-${consumer.theme.current}`}>
            <label>Title</label>
            <input type="text" placeholder="Title" value={input} onChange={e => setInput(e.target.value)}/>
          </form>
        </div>
        )
      }}
    </ThemeContext.Consumer>

  )
}

export default Match