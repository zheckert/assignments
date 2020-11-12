import React from "react"
import {Navbar} from "./components/Navbar"
import {Main} from "./components/Main"
import {Footer} from "./components/Footer"
import "./index.css"

export const App = () => {
    return(
            <div>
                <div>
                    <Navbar />
                </div>
                <div>
                    <Main />
                </div>
                <div>
                    <Footer />
                </div>
            </div>
    )
}