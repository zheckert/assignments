import React from "react"

function DiceBox(){
    return(
        <div>
            {Math.floor((Math.random() * 6) + 1)}
        </div>
    )
}