import Axios from "axios"
import React from "react"

//procedure: take input and URL encode (encodeURI())
//send new URL to API
//return and print new url somewhere

export const Shortener = () => {
    Axios.get("")
    return(
        <div>
            <div>
                <input></input>
            </div>
            <div className="button">
                <button>Shorten</button>
            </div>
        </div>
    )
}