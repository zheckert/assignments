import React from "react"

export const Pet = props => {
    return (
        <div>
            <h4>{props.name}</h4>
            <p>{props.breed}</p>
        </div>
    )
}

export default Pets