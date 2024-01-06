import React from 'react'
import List from './List'
import {Link} from 'react-router-dom'
import {useState,useEffect} from 'react'

const LandingPage = () => {
    
      const [name,setName]=useState()
      useEffect(()=>{
            localStorage.setItem('name', name)
      },[name])
     
  return (
    <section>

          <div className='Landing-Container'>
                <div className='conte'>
                      <h2>It's a brilliat idea to set up  a day  schedule!</h2>
                      <h3>What should i Call you ?</h3>
                      <input 
                      type="text" 
                      placeholder='Enter your preffered name (e.g Anifa)'  
                      value ={name}
                      onChange= {(e)=>setName(e.target.value)}
                      
                      /><br/>
                      <Link to={'List'}><button>Next</button></Link>
                </div>
          </div>
    </section>
    
  )
}

export default LandingPage