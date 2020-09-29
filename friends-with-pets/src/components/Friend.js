import React from "react"
import Pets from "./Pets"
import "../index.css"

function Friend(props) {

    return(
        <div className = "borderProperty">
            <h1>{props.name}</h1>
            <h2>{props.age}</h2>
            <div>
                {props.allPets.map(pet => <Pets name={pet.name} breed={pet.breed} />)}
            </div>
        </div>
    )
}

export default Friend

