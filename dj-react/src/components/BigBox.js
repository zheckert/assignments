import React from "react"
import Box from "./Box"

class BigBox extends React.Component {
    constructor(){
        super()
        this.state = {
           colors: ["white", "white", "white", "white"]
        }  
    }

    reverse = () => {
        this.setState(prevState => {

            if(prevState.colors[0] === "black"){
                return {
                    colors: ["white", "white", "white", "white", ]//maira said to put a map function here to reverse things
                }
            }else{
                return {
                    colors: ["black", "black", "black", "black", ]//maira said to put a map function here to reverse things
                }
            }

        })
    }

    render(){

        const colorsMap = this.state.colors.map(color => <Box color={color}/>)

        return(
            <div className="grid">
                {colorsMap}
                <button onClick={this.reverse}>REVERSE!</button>
            </div>
        )
    }
}

export default BigBox