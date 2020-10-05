import React from "react"

function Box(props){
    return(
        <div className="box">
            <p>{props.color}</p>
        </div>
    )
}

export default Box