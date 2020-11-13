import React, {useContext, useState} from "react"
const Context = React.createContext()

export const ContextProvider = (props) => {

    const [things, setThings] = useState([])

    const addUglyThing = (thing) => {
        setThings(prevThings => [...prevThings, thing])
    }

    return(
            <Context.Provider value={{things, addUglyThing}}>
                {props.children}
            </Context.Provider >
    )
}

export {Context}