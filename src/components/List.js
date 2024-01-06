import React, { useEffect, useState } from 'react'
import { MdDelete } from "react-icons/md";
import LandingPage from './LandingPage';
import { json } from 'react-router-dom';
import Time from './Time';

const List = () => {

  const[todos,setTodos] = useState(()=>{
    const value =localStorage.getItem("ArrayData")
    if(value){
      return JSON.parse(value)
    }else{
      return []
    }
  })
  const[todo,setTodo] = useState('')
  const [name] = useState(() => {
    
    const localValue  = localStorage.getItem("name");
    if(localValue){
          return localValue;
    } else {
          return ""
    }
})

const handleFormSubmit =(e)=>{
    e.preventDefault();
    setTodos((currentTodo)=>[
      ...currentTodo,{id:crypto.randomUUID(),tasker:todo,checked:false}
    ])

    setTodo('')
}

const handleDelete = (id) =>{
  const dele = todos.filter((todo)=>todo.id !== id)
  setTodos(dele)
}
const handleCheck = (id)=>{
  
  setTodos((todos)=>{
    return todos.map((tod)=>
    tod.id === id ? {...tod,checked:!tod.checked}: tod
    )
  })
}


useEffect (()=>{
  const storeData = localStorage.setItem("ArrayData",JSON.stringify(todos))
})
  return (
  <div className='contee'>
      <div className='List-container'>
       <div >
            <div>
                      <h1> <Time/></h1>
                      <h2>Hello  {name} plan your Day!</h2>
            </div>

            <div>
                    <form onSubmit={handleFormSubmit}>
                    <input 
                      type="text"
                      placeholder="What do you need to do?"
                      style={
                        {width:'20em',
                        padding:'0.1rem',
                        textAlign:'center',
                        outline:'none',
                        opacity:'0.6', 
                        border:'none',
                        borderRadius:'0.5em'}} 
                        value={todo}
                        onChange={(e)=>setTodo(e.target.value)}
                        /> 
                      <button 
                      style={
                        {width:'4em', 
                        backgroundColor:'#111',
                        border:'none',
                        opacity:'0.8em',
                         marginLeft:'1em',
                         color:'red'} }>Set</button>

                     </form>
            </div>
            <div className='com'>
                      <h2>You have {todos.length > 1 ? todos.length + "things todo" :todos.length + ' thing todo'  }</h2>
                      {todos.map((todoo)=>{
              return <div className='checkbo' key={todoo.id}>
                        <input type="checkbox" onChange={(()=>handleCheck(todoo.id))}/>
                        <span>{todoo.tasker}</span>
                        <button style={{
                        
                        }}
                        onClick={()=>handleDelete(todoo.id)}
                        >Remove</button>
                      
                    </div>
                      })}
                      
                    
            </div>
       </div>
    </div>
  </div>
  )
}

export default List