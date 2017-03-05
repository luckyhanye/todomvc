import React from "react"
import {Router,Route,hashHistory,browserHistory,Redirect,IndexRoute} from "react-router"

import Todo from "./todo.js"
import Todolist from "./todolist.js"
import Todocontrol from "./todocontrol.js"


class name extends React.Component{
  constructor(){
    super();
    this.state={

    }
  }
  render(){
    return(
      <Router history={browserHistory}>
        <Route path="/" component={Todo}>
          <Route path="list" component={Todolist}/>
          <Route path="control" component={Todocontrol}/>
        </Route>
      </Router>
    )
  }
}


export default
