import React from "react"

export const Target = (props) => {
    return(
        <div className="cell">
            <h1>{props.name}</h1>
            {/* //this doesn't work, I need to use an image tag and set the source as the link data. Also, I got an error that I needed to have an alt text prop so I added that too.
            <p>{props.image}</p> */}
            <img width="200px" alt={props.name} src={props.image}/>

        </div>
    )
}