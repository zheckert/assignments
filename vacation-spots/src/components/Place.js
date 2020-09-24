import React from "react"

function Place(props) {
    let className = "place"
    if(props.index % 2 === 0){className = "background place"}
    return (
        <div className = {className}> 
           {`${props.place} `}
           {`${props.price} `}
           {`${props.timeToGo} `}
        </div>
    )
}

export default Place