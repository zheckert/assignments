import React from "react"

export const Target = (props) => {
    return(
        <div className="container">
            <div className="flex">
                <div>
                    <h2>{props.name}</h2>
                    <img width="200px" alt={props.name} src={props.image}/>
                </div>
            </div>
        </div>
        
        
    )
}