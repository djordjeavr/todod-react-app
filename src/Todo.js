import React, { Component } from 'react';
import './App.css';
class Todo extends Component{
    constructor(props){
        super(props);

        this.state={
            todo:{
                title:"",
                description:""
            },
            todos:[]
        }
    }
    handleChange(e){
      this.setState({
          todo:{ 
            ... this.state.todo, 
        [e.target.name] : e.target.value
    }
      });
     
        }
        addTodo(){
          const todos=[...this.state.todos];
          todos.push(this.state.todo);
          
          this.setState({
            todo:{
              title:"",
              description:""
          },
           todos
          });
        }
        deleteTodo(title){
          const todos=[... this.state.todos];

          const deleteItem=todos.filter(todo=>todo.title!==title);
          this.setState({
            todos: deleteItem
          })
        }
        editTodo(title){
          const todos=[... this.state.todos];
          const filterItem=todos.filter(todo=>todo.title!==title);
        
          const selectedItem=todos.find(item=> item.title===title);
          this.setState({
            todos: filterItem,
            todo:{
              title:selectedItem.title,
              description:selectedItem.description
            }
          })
        }
        handleKeyDown=(e)=>{
          if (e.keyCode == 13) {
            this.addTodo();
          }
        }
      
    
render(){ 
    return (
        <div className='main'> 
<h1>Todo</h1>
<input type='text' placeholder='Enter a title' 
name='title'
value={this.state.todo.title}
onChange={ this.handleChange.bind(this)}
/>
<br/>
<input type='text' placeholder='Enter a content'
name='description'
value={this.state.todo.description}
onChange={ this.handleChange.bind(this)}
 onKeyDown={this.handleKeyDown.bind(this)} />
<br/>
<button onClick={()=>this.addTodo()}>Save</button>
<div className="container">
  {this.state.todos.map(item=>{
    return (
<div className="content" key={item.title}>
    <h5 >{item.title}</h5>
    <p>{item.description}</p>
    <button onClick={()=>this.deleteTodo(item.title)}>X</button>
    <button onClick={()=>this.editTodo(item.title)}>Edit</button>
</div>
    )
  })}

</div>
</div>
      );
    }
  }


export default Todo;
