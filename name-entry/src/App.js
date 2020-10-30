import React from "react"

class App extends React.Component {
    constructor(){
        super()
        this.state = {
            name: "",
            pastNames: [],
        }
    }

    handleChange = (event) => {
        this.setState({
            name: event.target.value
        })
    }

    onSubmit = (event) => {
        event.preventDefault();
        this.setState(prevState => {
            return { pastNames: [prevState.name, ...prevState.pastNames] }
        })
    }

    display = () => {
        return this.state.pastNames.map(name => {
            return (
                <h2>{name}</h2>
            )
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
                {this.display()}
            </div>
        )
    }
}

export default App