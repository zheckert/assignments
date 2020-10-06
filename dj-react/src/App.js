import React from "react"
import "./styles.css"
import BigBox from "./components/BigBox"

function App(){
    return(
        <div>
            <BigBox />
            <button onClick={reverse()}>REVERSE!</button>
        </div>
    )
    
}

export default App