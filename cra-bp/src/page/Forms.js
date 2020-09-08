import React, {Fragment} from "react";
import Match from "../forms/Match"
import Bracket from "../components/bracket/Bracket"

function Forms(){
  return(
    <Fragment>
      <div >
        New Actor form
      </div>
      <div >
       <Match />
      </div>
      <div >
        New venue form
      </div>
      <div>
        Bracket shit
      </div>
      <Bracket />
    </Fragment>
  )
}

export default Forms