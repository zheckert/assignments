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
            const newEntry = {...this.state}
            return {
            firstName: "", 
            lastName: "", 
            email: "", 
            placeOfBirth: "", 
            phone: "", 
            favoriteFood: "", 
            info: "", 
            completedForms: [newEntry, ...prevState.completedForms]}
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
            <>
            <div >
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <input 
                            name="firstName"
                            className="flex"
                            placeholder="First Name"
                            type="text"
                            value={this.state.firstName}
                            onChange={this.handleChange}
                        />
                        <input 
                            name="lastName"
                            className="flex"
                            placeholder="Last Name"
                            type="text"
                            value={this.state.lastName}
                            onChange={this.handleChange}
                        />
                    </div>
                    <div>
                        <input 
                            name="email"
                            className="flex"
                            placeholder="Email"
                            type="text"
                            value={this.state.email}
                            onChange={this.handleChange}
                        />
                        <input 
                            name="placeOfBirth"
                            className="flex"
                            placeholder="Place of Birth"
                            type="text"
                            value={this.state.placeOfBirth}
                            onChange={this.handleChange}
                        />
                    </div>
                    <div>
                        <input 
                            name="phone"
                            className="flex"
                            placeholder="Phone"
                            type="number"
                            value={this.state.phone}
                            onChange={this.handleChange}
                        />
                        <input 
                            name="favoriteFood"
                            className="flex"
                            placeholder="Favorite Food"
                            type="text"
                            value={this.state.favoriteFood}
                            onChange={this.handleChange}
                        />
                    </div>
                    <br />
                    <input 
                        name="info"
                        className="flex"
                        placeholder="Tell us a bit about yourself!"
                        type="text"
                        value={this.state.info}
                        onChange={this.handleChange}
                    />
                    <br />
                    <div><input className="button" type="submit" value="Submit"/></div>
                </form>
            </div>

            <div>
                {this.newBadge()}
            </div>
            </>
        ) 
    }
}

export default Form