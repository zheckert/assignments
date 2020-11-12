import React, { useContext } from "react"

import {ThemeContext} from "./ThemeContext"

export const Footer = () => {
    const context = useContext(ThemeContext)
    return(
        <div  className={`${context.theme}-theme`} >
            <div className="flex">
                Copyright, &c., &c.
            </div>
        </div>
        
    )
}