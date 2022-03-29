import React from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Switch from "react-router" 
import Home from './Home'
import About from './About'
import { stringify } from 'querystring'

export default function RouterPages() {
    component:"any"; 
    path: "string"; 
  return (
    <div>
      <Router>
          <Switch>
              <Route path="/" component ={Home}/>
              <Route path="/about" component ={About}/>

          </Switch>
      </Router>
    </div>
  )
}
