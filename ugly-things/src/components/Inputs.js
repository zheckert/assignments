import React, {useContext, useState} from "react"
import {Context} from "../context"

export const Inputs = () => {
    const {addUglyThing} = useContext(Context)
    const [inputState, setInputState] = useState({title:"", image:"", description:""})

    const addThing = (event) => {
        event.preventDefault()
        addUglyThing(inputState)
    }

    const handleChange = (event) => {
        const {name, value} = event.target
        setInputState(prevInputState => ({...prevInputState, [name]:value}))
    }

    return(
        <div>
            <div className="header">
                <h1>My List of Pretty Things</h1>
            </div>
            <form className="header">
                <input className="formSpacer" placeholder="Title" name="title" value={inputState.title} onChange={handleChange}></input>
                <input className="formSpacer" placeholder="Image URL" name="imageUrl" value={inputState.imageUrl} onChange={handleChange}></input>
                <input className="formSpacer" placeholder="Description" name="description" value={inputState.description} onChange={handleChange}></input>
                <button onClick={addThing}>Add</button>
            </form>
        </div>
    )
}