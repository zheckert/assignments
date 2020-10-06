import React from "react"
import Box from "./Box"

class BigBox extends React.Component {
    constructor(){
        super()
        this.state = {
           colors: ["white", "white", "white", "white"]
        }
        this.reverse = this.reverse.bind(this)
    }

    reverse(){
        this.setState(prevState => {
            return {
                colors: ["black", "black", "black", "black", ]//maira said to put a map function here to reverse things
            }
        })
    }

    render(){
        return(
            <div className="grid">
                <Box color={this.state.colors[0]}/>
                <Box color={this.state.colors[1]}/>
                <Box color={this.state.colors[2]}/>
                <Box color={this.state.colors[3]}/>
            </div>
        )
    }
}

export default BigBox