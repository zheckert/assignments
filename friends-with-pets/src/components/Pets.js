import React from "react"
import "../index.css"

function Pets(props) {

    return (
        <div className="borderProperty2">
            <h3>{props.name}</h3>
            <p>{props.breed}</p>
        </div>
    )
}

export default Pets