import React, {useState} from "react"

import {Box} from "./Box"


export const BigBox = () => {
    const [colors, setColors] = useState(["white", "black", "black", "white"])

    const reverse = () => {
        setColors(prevState => {
            if(prevState === "black"){
                return {
                    ...prevState,
                    colors: ["white", "black", "black", "white", ]
                }
            }else{
                return {
                    colors: ["black", "white", "white", "black", ]
                }
            }
        })
    }

    const purple = () => {
        setColors(prevState => {
            return {
                colors: ["purple", "purple", prevState.colors[2], prevState.colors[3]]
            }
        })
    }

    const blue1 = () => {
        setColors(prevState=> {   
            if(prevState.colors[3] === "blue")    {
                return {
                    colors: [prevState.colors[0], prevState.colors[1], prevState.colors[2], "white"]
                }
            }else{
                return {
                    colors: [prevState.colors[0], prevState.colors[1], prevState.colors[2], "blue"]
                }
            }
            
        })
    }

    const blue2 = () => {
        setColors(prevState=> {
            if(prevState.colors[2] === "blue") {
                return {
                    colors: [prevState.colors[0], prevState.colors[1], "white", prevState.colors[3]]
                }
            }else{
                return {
                    colors: [prevState.colors[0], prevState.colors[1], "blue", prevState.colors[3]]
                }
            }
        })
    }

    const colorsMap = colors.map(color => <Box color={color}/>)

    return(
            <>
            <div className="grid">
                {colorsMap}
            </div>
            <div className="center">
                <button className="button" onClick={reverse(colors)}>REVERSE!</button>
                <button className="button" onClick={purple(colors)}>Purple</button>
                <button className="button" onClick={blue1(colors)}>Blue 1</button>
                <button className="button" onClick={blue2(colors)}>Blue 2</button>
            </div>
            </>
        )
}