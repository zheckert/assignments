import React from "react"
import Box from "./Box"

class BigBox extends React.Component {
    constructor(){
        super()
        this.state = {
           colors: ["white", "black", "black", "white"]
        }  
    }

    reverse = () => {
        this.setState(prevState => {

            if(prevState.colors[0] === "black"){
                return {
                    colors: ["white", "black", "black", "white", ]
                }
            }else{
                return {
                    colors: ["black", "white", "white", "black", ]
                }
            }

        })
    }

    purple = () => {
        this.setState(prevState => {
            return {
                colors: ["purple", "purple", "purple", "purple", ]
            }
        })
        
    }

    render(){

        const colorsMap = this.state.colors.map(color => <Box color={color}/>)

        return(
            <div className="grid">
                {colorsMap}
                <button className="button" onClick={this.reverse}>REVERSE!</button>
                <button className="button" onClick={this.purple}>Purple</button>
            </div>
        )
    }
}

export default BigBox