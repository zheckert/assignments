import React from "react"
import "../index.css"

class Form extends React.Component {
    constructor() {
        super()
        this.state={
            firstName: "",
            lastName: "",
            email: "",
            placeOfBirth: "",
            Phone: "",
            FavoriteFood: "",
            info: ""
        }
    }

    handleChange = (e) => {
        //remember to add the default thingy so things don't break. Thank you.
        this.setState({
            firstName: e.target.value
        })
    }

    render() {
        return(
            <div >
                <form className="container">
                    <input 
                        className="child1"
                        placeholder="First Name"
                        type="text"
                        onChange={this.handleChange}
                    />
                    <input 
                        className="child2"
                        placeholder="Last Name"
                    />
                    <input 
                        className="child3"
                        placeholder="Email"
                    />
                    <input 
                        className="child4"
                        placeholder="Place of Birth"
                    />
                    <input 
                        className="child5"
                        placeholder="Phone"
                    />
                    <input 
                        className="child6"
                        placeholder="Favorite Food"
                    />
                    <br />
                    <input 
                        className="child7"
                        placeholder="Tell us a bit about yourself!"
                    />
                </form>
                {/* fix this !@#$% button. */}
                <button className="button">Submit</button>
            </div>
        ) 
    }
}

export default Form