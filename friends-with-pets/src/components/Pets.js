import React from "react"

function Pets(props) {
    return (
        <div>
            <h4>{props.name}</h4>
            <p>{props.breed}</p>
        </div>
    )
}

export default Pets