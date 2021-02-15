import axios from "axios"
import React, { useState } from "react"

export const Shortener = () => {
    const [ longLink, setLongLink ] = useState("")
    const [ shortLink, setShortLink] = useState("")
    const [ hover, setHover] = useState(false)

    const shorten = (e) => {
        e.preventDefault();
        axios.post("https://vschool-cors.herokuapp.com?url=https://goolnk.com/api/v1/shorten", {url: longLink})
            .then((response) => {
                setShortLink(`Your new link is ${response.data.result_url}`)
                })
            .catch((error) => console.log(error))
    }
    
    const onChange = (e) => {
        setLongLink(encodeURI(e.target.value))
    }

    //Potential idea: make sure link is copyable to clipboard. See below:
    //https://stackoverflow.com/questions/45071353/copy-text-string-on-click

    //Also, we could add the additional text on shortlink to the h3 below instead of adding it to state.

    return(
        <>
        <div className="shortenerCenter">
            <input className={`input${hover ? " hover" : "" }`} name="link" placeholder="Put your link in here!" onChange={onChange}></input>
            <button className={`button${hover ? " hover" : "" }`} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)} onClick={shorten}>CUT!</button>
        </div>
        <div className="center">
            <h3>{shortLink}</h3>
        </div>
        </>
    )
}