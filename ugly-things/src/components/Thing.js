import { id } from "postcss-selector-parser"
import React, { useContext } from "react"
import { Context } from "../context"

export const Thing = (props) => {
    const { superDelete, edit } = useContext(Context)
    console.log(props.image)
    return(
        <div>
            <div>
                <img src={props.image} alt={props.title}/>
            </div>
            <div>
                <div>
                    <h3>{props.title}</h3>
                </div>
                <div>
                    {props.description}
                </div>
                <button onClick={() => superDelete(props.id)}>Delete</button>
                <button onClick={() => edit(props.id)}>Edit</button>
            </div>
        </div>
    )
}