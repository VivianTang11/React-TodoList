import React, { useContext } from 'react'
import { GlobalContext } from '../App';

export default function Input() {

  const ctx = useContext(GlobalContext)
  const setInputText = ctx.setInputText 
  const inputText = ctx.inputText 
  const tasks = ctx.tasks 
  const setTasks = ctx.setTasks 

  const submitTask = () => {
    setTasks(
      [...tasks,
        { id: Math.floor(Math.random()*100), 
          text: inputText, 
          completed: false}
      ])
    setInputText('')
  }

  return (
    <section className="search-section">
        <input type="text" placeholder="Add new task here..." onChange={(e) => setInputText(e.target.value)} value={inputText}/>
        <button type="submit" onClick={submitTask}>+</button>
    </section>
  )
}
