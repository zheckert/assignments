import React, { useContext, useState, useEffect } from "react"
import { Context } from "../context"

export const Thing = (props) => {
    const { superDelete, edit } = useContext(Context)
    const [editing, setEditing] = useState(false)
    const [change, setChange] = useState({
        image: props.image,
        title: props.title,
        description: props.description,
        id: props.id
    })

    useEffect(() => {
        setChange({
            image: props.image,
            title: props.title,
            description: props.description,
            id: props.id
        })
    }, [props])

    return (
        <div>
            <div>
                <img src={props.image} alt={props.title} />
            </div>
            <div>
                <div>
                    <h3>{props.title}</h3>
                </div>
                <div>
                    {props.description}
                </div>
                <button onClick={() => superDelete(props.id)}>Delete</button>
                <button onClick={() => setEditing(true)}>Edit</button>
                {editing ? <>
                    <input onChange={(e) => setChange(prev => {
                        return { ...prev, image: e.target.value }
                    })} value={change.image} />
                    <input onChange={(e) => setChange(prev => {
                        return { ...prev, title: e.target.value }
                    })} value={change.title} />
                    <input onChange={(e) => setChange(prev => {
                        return { ...prev, description: e.target.value }
                    })} value={change.description}
                    />
                    <button onClick={() => edit(change)}></button>
                </> : null}
            </div>
        </div>
    )
}