import React from "react"
import {Die} from "./Die"

class DiceBox extends React.Component {
    constructor(){
        super();
        this.state ={
                num: [0, 0, 0, 0, 0]
        }
    }

    lotsaDice = () => {
        return(
            this.state.num.map(dice => <Die number = {dice} />)
        )
    } 

    roll = () => {
        const nums = []
        for(let i = 0; i < 5; i++){
            nums.push(Math.floor((Math.random() * 6) + 1))
        }
        this.setState(prevState => {
            return{
                num: nums
            }
        })
    }

    render(){
        return(
            <>
            <div className = "container">
               {this.lotsaDice()}
            </div>
            <div className = "button">
                <button onClick = {this.roll}>Roll New</button>
            </div>
            </>
    
        )
    }
}

export default DiceBox