import axios from "axios"
import React, { useState, useEffect } from "react"

//procedure: take input and URL encode (encodeURI()) https://attacomsian.com/blog/javascript-encode-url
//send new URL to API
//return and print new url somewhere https://goolnk.com/docs

export const Shortener = () => {
    const [ longLink, setLongLink ] = useState("")
    const [ shortLink, setShortLink] = useState("")

    // useEffect(() => {
    //     axios.post("/api/v1/shorten", longLink)
    //         .then((response) => {setShortLink(response.result_url)
    //             console.log(response)})
    //         .error((error) => console.log(error))
    // }, [])
    
    const shorten = (e) => {
        e.preventDefault();
        axios.post("https://goolnk.com/api/v1/shorten", longLink)
            .then((response) => {setShortLink(response.result_url)
                console.log(response)})
            .catch((error) => console.log(error))
    }

    const onChange = (e) => {
        console.log(e.target.value)
        setLongLink(encodeURI(e.target.value))
        
    }
    console.log(longLink)
    return(
        <div>
            <div>
                <input name="link" placeholder="Dump your link in here!" onChange={onChange}></input>
            </div>
            {/* https://www.w3docs.com/snippets/css/how-to-change-input-and-button-images-with-css.html */}
            <div className="button">
                <button onClick={shorten}>Shorten</button>
            </div>
        </div>
    )
}