
import React, { useState } from "react"
const Context = React.createContext()

export const ContextProvider = (props) => {

    const [things, setThings] = useState([])

    const addUglyThing = (thing) => {
        setThings(prevThings => [...prevThings, thing])
    }

    const superDelete = (id) => {
        setThings(prevThings => prevThings.filter(thing => thing.id !== id))   
    }

    const edit = (change) => {
        let r = [...things]
        console.log(change.id)
        for(let i = 0; i < r.length; i++){
            console.log(r)
            if(change.id === r[i].id){
                r.splice(i, i + 1, change)
                setThings(r)
            }
        }
    }

    return(
            <Context.Provider value={{things, addUglyThing, superDelete, edit}}>
                {props.children}
            </Context.Provider >
    )
}

export { Context }