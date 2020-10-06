import React from "react"

function Box(props){
    return(
        <div style = {{backgroundColor: "white"}} className = "box">
            <p>{props.color}</p>
        </div>
    )
}

export default Box