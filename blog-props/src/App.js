import React from "react"
import Header from "./components/Header"
import BlogList from "./components/BlogList"
import Footer from "./components/Footer"

function App(){
    return(
        <div>
            <p><Header /></p>
            <p><BlogList /></p>
            <p><Footer /></p>
        </div>
    )
}

export default App