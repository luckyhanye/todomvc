import React from "react"

class Todocontrol extends React.Component{
  constructor(){
    super();
    this.state={
      btns:["All","Completed","Active"]
    }
  }
  render(){
    return(
      <div>
        {this.state.btns.map(item=>
        <button key={Math.random()} onClick={()=>this.props.handleVisible(item)}
          className={this.props.visible===item ? "btn btn-primary" : "btn btn-default"}>{item}</button>)}
      </div>
    )
  }
}

export default Todocontrol
