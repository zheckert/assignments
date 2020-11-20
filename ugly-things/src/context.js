import React, { useState } from "react"
const Context = React.createContext()

export const ContextProvider = (props) => {

    const [things, setThings] = useState([])

    const addUglyThing = (thing) => {
        setThings(prevThings => [...prevThings, thing])
    }

    const superDelete = (id) => {
        setThings(prevThings => prevThings.filter(thing => thing.id != id))   
    }

    const edit = () => {
        setThings(prevThings => prevThings.map(thing => {
            if(thing.id === id){
                return editedThing
            }else{
                return thing
            }
        }))
    }

    return(
            <Context.Provider value={{things, addUglyThing, superDelete, edit}}>
                {props.children}
            </Context.Provider >
    )
}

export { Context }