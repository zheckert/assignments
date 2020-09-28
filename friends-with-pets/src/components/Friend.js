import React from "react"
import Pets from "./component/Pets"

function Friend(props) {
    return(
        <div>
            <h3>{props.name}</h3>
            <p>{props.age}</p>
            <p>{<Pets pets={props.pets}/>}</p>
        </div>
    )
}

export default Friend

