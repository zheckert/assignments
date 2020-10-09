import React from "react"

class App extends React.Component {
    constructor(){
        super()
        this.state = {
            name: "",
            pastNames: []
        }
    }

    handleChange = (event) => {
        this.setState({
            name: event.target.value
        })
    }

    onSubmit = (event) => {
        this.setState({
            pastNames: event.target.value
        })
    }

    render(){
        return(
            <div>
                <form onSubmit = {this.onSubmit}>
                    <input 
                        type="text" 
                        value={this.state.name} 
                        placeholder="Your name here!" 
                        onChange={this.handleChange}
                    />
                    <button>
                        Add
                    </button>
                </form>
                <h1>
                    {this.state.name}
                </h1>
                <h2>
                    {this.state.pastNames}
                </h2>
            </div>
        )
    }
}

export default App