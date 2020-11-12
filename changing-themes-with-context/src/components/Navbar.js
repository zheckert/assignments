import React, { useContext } from "react"
import { ThemeContext } from "./themeContext"

export const Navbar = (props) => {

    const context = useContext(ThemeContext)

    return(
        <div className={`${context.theme}-theme`}>
            <div>
                Home
            </div>
            <div>
                About
            </div>
            <div>
                Contact
            </div>  
        </div>
    )
}