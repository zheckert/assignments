import React from "react"
import Box from "./Box"

class BigBox extends React.Component {
    constructor(){
        super()
        this.state = {
           colors: ["white", "black", "white", "black"]
        }
        this.reverse = this.reverse.bind(this)
    }

    reverse(){
        this.setState(prevState => {
            return {
                if(colors: prevState.count === white){
                    colors: black
                }
            }

        this.state = {
            ["black", "white", "black", "white"];
        }
    }

    render(){
        return(
            <div className="grid">
                <Box color={this.state.colors[0]/>
                <Box color={this.state.colors[1]/>
                <Box color={this.state.colors[0]/>
                <Box color={this.state.colors[1]/>
            </div>
        )
    }
}

export default BigBox