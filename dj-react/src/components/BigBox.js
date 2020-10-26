import React from "react"
import {Box} from "./Box"

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
                colors: ["purple", "purple", prevState.colors[2], prevState.colors[3]]
            }
        })
    }

    blue1 = () => {
        this.setState(prevState=> {   
            if(prevState.colors[3] === "blue")    {
                return {
                    colors: [prevState.colors[0], prevState.colors[1], prevState.colors[2], "white"]
                }
            }else{
                return {
                    colors: [prevState.colors[0], prevState.colors[1], prevState.colors[2], "blue"]
                }
            }
            
        })
    }

    blue2 = () => {
        this.setState(prevState=> {
            if(prevState.colors[2] === "blue") {
                return {
                    colors: [prevState.colors[0], prevState.colors[1], "white", prevState.colors[3]]
                }
            }else{
                return {
                    colors: [prevState.colors[0], prevState.colors[1], "blue", prevState.colors[3]]
                }
            }
        })
    }

    render(){
        const colorsMap = this.state.colors.map(color => <Box color={color}/>)
        return(
            <>
            <div className="grid">
                {colorsMap}
            </div>
            <div className="center">
                <button className="button" onClick={this.reverse}>REVERSE!</button>
                <button className="button" onClick={this.purple}>Purple</button>
                <button className="button" onClick={this.blue2}>Blue 1</button>
                <button className="button" onClick={this.blue1}>Blue 2</button>
            </div>
            </>
        )
    }
}

export default BigBox