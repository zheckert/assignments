import React from "react"
import './index.css';
import { Switch, Route} from "react-router-dom"
import { Header } from "./components/Header"
import { Footer } from "./components/Footer"
import { Home } from "./components/Home"
import { Services } from "./components/Services"
import { About } from "./components/About"

export const App = () => {
  return(
    <div>
      <div>
        <Header />
      </div>
      
      <div>
        <Switch> 
            <Route exact path="/" component={Home}/>
            <Route path="/services" component={Services}/>
            <Route path="/about" component={About}/>
        </Switch>
      </div>
      
      <div>
        <Footer />
      </div>
    </div>
  )
}

