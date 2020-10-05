import React from "react"
import "./styles.css"
import BigBox from "./components/BigBox"

function App(){
    return(
        <div>
            <BigBox />
            <button>Reverse!</button>
            {/* <button onClick={this.props.reverse}>REVERSE!</button> */}
            {/* <Button /> */}
        </div>
    )
    
}

export default App