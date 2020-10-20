import React from "react"
import {Target} from "./Target"
import "./index.css"

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            loading: false,
            hitList: []
        }          
    }

    componentDidMount() {
        this.setState({loading: true})
        fetch("https://raw.githubusercontent.com/VSchool/vschool-api/master/static/hitlist.json")
            .then(response => response.json())
            .then(data => {
                this.setState({
                    loading: false,
                    hitList: data
                })
            })
    }

    render(){

        let hitData = this.state.hitList.map(hit => <Target name={hit.name} image={hit.image}/>)

        return(
            <div>
                {this.state.loading ? "Now loading! Thank you for your patience, you're so gracious for sticking around while we gather the data you requested from the Star Wars API." : null} 
                {hitData}     
            </div>  
        )
    }
}

export default App
