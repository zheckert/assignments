import React from "react"

import { Display } from "./components/Display"
import { Inputs } from "./components/Inputs"

export const App = () => {

    return(
        <>
        <div>
            <Inputs />
        </div>
        <div>
            <Display />
        </div>
        </>
    )
}