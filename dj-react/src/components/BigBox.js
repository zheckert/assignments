import React from "react"
import Box from "./Box"

class BigBox extends React.Component {
    // constructor(){
    //     super()
    //     this.state = {
    //         ["white", "white", "white", "white"];
    //     }
    //     this.reverse = this.reverse.bind(this)
    // }
        //obviously the below is wrong, I need to fix it.
    // reverse(){
    //     this.state = {
    //         ["black", "black", "black", "black"];
    //     }
    // }
    render(){
        return(
            <div className="grid">
                <Box />
                <Box />
                <Box />
                <Box />
                {/* <Box color={this.state.colors[0]/>
                <Box color={this.state.colors[1]/>
                <Box color={this.state.colors[2]/>
                <Box color={this.state.colors[3]/> */}
            </div>
        )
    }
}

export default BigBox