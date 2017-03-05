import React from "react"

class Todolist extends React.Component{
  constructor(){
    super();
    this.state={

    }
  }
  render(){
    console.log("props=====",this.props.showData);
    let list=this.props.data.map( item =>
      <li key={item.id}>
      <input type="checkbox" className="pull-left" style={{marginRight:"150px"}} defaultChecked={item.completed}
      onChange={()=>this.props.handleCompleted(item.id)}/>
      <span style={{textDecoration:item.completed ? 'line-through' : 'none'}}>{item.text}</span>
      <span className="glyphicon glyphicon-remove-circle pull-right" aria-hidden="true"
        onClick={()=>this.props.handleRemove(item.id)}></span>
      </li>)
    return(
      <div>
        <ul style={{marginTop:"10px"}}>
          {list}
        </ul>
      </div>
    )
  }
}


export default Todolist
