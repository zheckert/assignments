import axios from "axios"
import React, { useState } from "react"

//procedure: take input and URL encode (encodeURI()) https://attacomsian.com/blog/javascript-encode-url
//send new URL to API
//return and print new url somewhere https://goolnk.com/docs
//don't forget to make it responsive

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