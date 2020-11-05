import React from "react"
import {Navbar} from "./components/Navbar"
import {Main} from "./components/Main"
import {Footer} from "./components/Footer"
import {ThemeContextConsumer} from "./components/ThemeContext"
import "./index.css"

export const App = () => {
    return(
        <ThemeContextConsumer>
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
        </ThemeContextConsumer>
    )
}