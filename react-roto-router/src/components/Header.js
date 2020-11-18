import React from "react"
import { Link } from "react-router-dom"

export const Header = () => {
    return(
        <div  className="flex">
            <div>
                <Link to="/">Home</Link>
            </div>
            <div>
                <Link to="/services">Services</Link>
            </div>
            <div>
                <Link to="/about">About</Link>
            </div>
        </div>
    )
}