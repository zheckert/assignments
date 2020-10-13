import React from "react"
import Form from "./components/Form"
import "./index.css"

export const App = () => {
    return(
        <div className="outline">
            <p>{<Form />}</p>
        </div>
    )
}