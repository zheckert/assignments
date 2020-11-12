import React, { useContext } from "react"
import { ThemeContext } from "./ThemeContext"

export const Navbar = () => {

    const context = useContext(ThemeContext)

    return(
        <div className={`${context.theme}-theme`}>
            <div className="flex">
                <div>
                    <h3>Home</h3>
                </div>
                <div>
                    <h3>About</h3>
                </div>
                <div>
                    <h3>Contact</h3>
                </div>  
            </div>
        </div>
    )
}