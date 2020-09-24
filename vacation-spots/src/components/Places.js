import React from "react"

function Places(props) {
    return(
        <div>
            <h2>{props.destinations.place}</h2>
            <p>{props.destinations.price}</p>
            <p>{props.destinations.timeToGo}</p>
        </div>
    )
}

export default Places