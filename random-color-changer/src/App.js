import React from "react"

class App extends React.Component{
    constructor(){
        super()
        this.state ={
            color: ""
        }
    }
    
    componentDidMount = () => {
        fetch(`http://www.colr.org/json/color/random?timestamp=${new Date().getTime()}`)
        .then(response => response.json())
        .then(colorData => {
            console.log(colorData.new_color)
            this.setState({
                color: colorData.new_color
            })
        })
    }

    render(){
        return(
            <div style={{width: 200, height: 200, backgroundColor: `#${this.state.color}`}}></div>
        )
    }
}

export default App