import React from "react"
import "../index.css"
import {Badge} from "./Badge"

class Form extends React.Component {
    constructor() {
        super()
        this.state={
            firstName: "",
            lastName: "",
            email: "",
            placeOfBirth: "",
            phone: "",
            favoriteFood: "",
            info: "",
            completedForms: []
        }
    }

    handleChange = (event) => {
        event.preventDefault()
        const {name, value} = event.target
        this.setState({
            [name]: value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.setState((prevState) => {
            //Finish fleshing this out
            return { completedForms: [prevState.name, ...prevState.completedForms]}
        })
    }

    newBadge = () => {
        return this.state.completedForms.map(form => {
            return(
                <Badge 
                    firstName={form.firstName}
                    lastName={form.lastName}
                    email={form.email}
                    placeOfBirth={form.placeOfBirth}
                    phone={form.phone}
                    favoriteFood={form.favoriteFood}
                    info={form.info}          
                />
            )
        })
    }

    render() {
        return(
            <div >
                <form onSubmit={this.handleSubmit} className="container">
                    <input 
                        name="firstName"
                        className="child1"
                        placeholder="First Name"
                        type="text"
                        value={this.state.firstName}
                        onChange={this.handleChange}
                    />
                    <input 
                        name="lastName"
                        className="child2"
                        placeholder="Last Name"
                        type="text"
                        value={this.state.lastName}
                        onChange={this.handleChange}
                    />
                    <input 
                        name="email"
                        className="child3"
                        placeholder="Email"
                        type="text"
                        value={this.state.email}
                        onChange={this.handleChange}
                    />
                    <input 
                        name="placeOfBirth"
                        className="child4"
                        placeholder="Place of Birth"
                        type="text"
                        value={this.state.placeOfBirth}
                        onChange={this.handleChange}
                    />
                    <input 
                        //restrict to numbers
                        name="phone"
                        className="child5"
                        placeholder="Phone"
                        type="text"
                        value={this.state.phone}
                        onChange={this.handleChange}
                    />
                    <input 
                        name="favoriteFood"
                        className="child6"
                        placeholder="Favorite Food"
                        type="text"
                        value={this.state.favoriteFood}
                        onChange={this.handleChange}
                    />
                    <br />
                    <input 
                        name="info"
                        className="child7"
                        placeholder="Tell us a bit about yourself!"
                        type="text"
                        value={this.state.info}
                        onChange={this.handleChange}
                    />
                    <input type="submit" value="Submit"/>
                </form>
                {this.newBadge()}
            </div>
        ) 
    }
}

export default Form