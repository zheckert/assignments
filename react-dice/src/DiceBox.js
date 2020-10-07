import React from "react"
import {Die} from "./Die"

class DiceBox extends React.Component {
    constructor(){
        super();
        this.state ={
                num: 0
        }
    }
       
    roll = () => {
        this.setState(prevState => {
            return{
                num: Math.floor((Math.random() * 6) + 1)
            }
        })
    }

    render(){
        return(
            <div>
                <Die number = {this.num}/>
                <Die number = {this.num}/>
                <Die number = {this.num}/>
                <Die number = {this.num}/>
                <Die number = {this.num}/>
            <button onClick = {this.roll}>Roll New</button>
            </div>
    
        )
    }

}


export default DiceBox