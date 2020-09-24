import React from "react"
import Places from "./components/Places"
import destinations from "./components/destinations"

function Hub(){
    const placesToGo = destinations.map(places => <Places key={places.id} places={places}/>)

        return(
            <div>
                {placesToGo}
            </div>
        )
}

export default Hub