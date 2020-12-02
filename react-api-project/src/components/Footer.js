import React from "react"
import { Switch, Route } from "react-router-dom"
import { NavLink } from "react-router-dom"

import { About, Documentation } from "./index"

export const Footer = () => {
    return(
        <>
        <div className="nav">
            <div className="spacer">
                <NavLink to="/">About</NavLink>
            </div>
            
            <div className="spacer">
                <NavLink to="/documentation">Documentation</NavLink>
            </div>
        </div>

        <Switch>
            <Route exact path="/">
                <About />
            </Route>
             <Route path="/documentation">
                <Documentation />
            </Route>
        </Switch>
        </>
    )
}