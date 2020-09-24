import React from "react"
import Place from "./components/Place"
import destinations from "./components/destinations"
import "./styles.css"

function Hub(){
    const placesToGo = destinations.map((destination, i) => <Place place = {destination.place} price = {destination.price} timeToGo = {destination.timeToGo} index = {i}/>)
        return(
            <div>
                {placesToGo}
            </div>
        )
}

export default Hub