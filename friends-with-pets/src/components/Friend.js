import React from "react"

//Need to finish <Pets />

export const Friend = props => {
    return(
        <div>
            <h3>{props.name}</h3>
            <p>{props.age}</p>
            <PetsList pets = {props.pet}/> 
        </div>
    )
}