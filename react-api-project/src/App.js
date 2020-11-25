import React from "react"
import { Shortener } from "./components/Shortener"
import './index.css';

export const App = () => {
  return(
    <div>
      <div className="center">
        <h1>URL SHORTENER FOR YOUR PLAYSURE</h1>
      </div>
      <div className="center">
        Paste your link below and hit that button!
      </div>
      <div className="center">
        <Shortener />
      </div>  
    </div>
  )
}
