import React, { useEffect, useState } from "react"
import {Target} from "./Target"
import "./index.css"

export const App = () => {
    const [loading, setLoading] = useState(false)
    const [hitList, setList] = useState([])

    useEffect(() => {
        setLoading(true)
        fetch("https://raw.githubusercontent.com/VSchool/vschool-api/master/static/hitlist.json")
            .then(response => response.json())
            .then(data => {
                setLoading(false)
                setList(data)
            })
    }, [])

    let hitData = hitList.map(hit => <Target name={hit.name} image={hit.image}/>)

    return(
        <>
        <h1 className="container">Hitlist</h1>
        <div>
            {loading ? "Now loading! Thank you, etc, etc" : null}
            {hitData}
        </div>
        </>
    )
}