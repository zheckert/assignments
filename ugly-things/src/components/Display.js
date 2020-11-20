import React, { useContext } from "react"
import { Thing } from "./Thing"

import { Context } from "../context"

export const Display = () => {
    const {things} = useContext(Context)

    let everything = things.map(thing => 
        <Thing 
            image={thing.image} 
            title={thing.title} 
            description={thing.description} 
            id={thing.id}
        />
    )

    return(
        <div>
            {everything}
        </div>
    )
}
