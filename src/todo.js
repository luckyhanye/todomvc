import React from "react"

import Todolist from "./todolist.js"
import Todocontrol from "./todocontrol.js"
import "./main.css"


class Todo extends React.Component{
  constructor(){
    super();
    this.state={
      inputValue:"",
      data:[ ],
      visible:"All"
    }
  }
  valueChange(e){
    this.setState({inputValue:e.target.value})
    console.log("inputValue=====",this.state.inputValue);
  }
  handleSubmit(e){
    e.preventDefault();
    let newItem=this.state.inputValue.trim();    //新输入的内容
    if(newItem.length===0){
      alert("内容不能为空！")
    }else{
      let newData={
        text:newItem,
        completed:false,
        id:new Date().getTime()
      }
      this.setState({data:[...this.state.data,newData]})
    }
    this.setState({inputValue:""})
  }
  getIndex(id){
    return this.state.data.findIndex(item=>item.id===id)
  }
  handleCompleted(id){
    let index=this.getIndex(id)
    this.state.data[index].completed=!this.state.data[index].completed
    this.setState({data:this.state.data})
  }
  handleRemove(id){
    let index=this.getIndex(id)
    this.state.data.splice(index,1)
    this.setState({data:this.state.data})
  }
  handleVisible(visible){
    this.setState({visible:visible})
  }
  componentWillMount(){
   if (localStorage.todos) {
     this.setState({data: JSON.parse(window.localStorage.getItem('todos') || '[]') })
   }
 }
  render(){
    localStorage.setItem('todos',JSON.stringify(this.state.data))
    let showData;
    switch(this.state.visible){
      case "Completed" : showData=this.state.data.filter(item=>item.completed);break;
      case "Active" : showData=this.state.data.filter(item=>!item.completed);break;
      default : showData =this.state.data
    }
    console.log("showData=====",showData);
    return(
      <div style={{padding:'0 40px'}}>
        <h1 style={{color:'teal',fontSize:"30px",lineHeight:'1.5em',textAlign:'center'}}>TODO</h1>
        <form className="form-group" onSubmit={this.handleSubmit.bind(this)}>
          <input type="text" className="form-control" value={this.state.inputValue}
          onChange={this.valueChange.bind(this)}/>
          <button className="btn btn-default">add</button>
        <Todolist data={showData} handleCompleted={this.handleCompleted.bind(this)}
        handleRemove={this.handleRemove.bind(this)}/>
        </form>
        <Todocontrol handleVisible={this.handleVisible.bind(this)} visible={this.state.visible}/>
      </div>
    )
  }
}


export default Todo
