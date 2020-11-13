import React from "react"

export const Thing = (props) => {

    return(
        <div>
            <div>
                {props.image}
            </div>
            <div>
                <div>
                    <h3>{props.title}</h3>
                </div>
                <div>
                    {props.description}
                </div>
            </div>
        </div>
    )
}