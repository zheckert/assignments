import React from "react"

Friend = props => {
    return(
        <div>
            <h3>{props.name}</h3>
            <p>{props.age}</p>
            <PetsList pets = {props.pet}/> 
        </div>
    )
}

export default Friend