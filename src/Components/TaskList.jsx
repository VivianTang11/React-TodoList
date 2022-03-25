import React, { useContext } from 'react'
import { GlobalContext } from '../App';

export default function TaskList() {
  
  const ctx = useContext(GlobalContext)
  const tasks = ctx.tasks 
  const setTasks = ctx.setTasks 

  const deleteTask = (id) => {
    setTasks(tasks.filter((task)=> task.id !== id))
  }


  return (
    <section className="task-section">
        <h2>Your Tasks</h2>
        {ctx.tasks.map((task, index) => (
          <article className='task' key={index}>
            <p>{task.text}</p>
            <button><i className="fa-solid fa-check"></i></button>
            <button onClick={()=> deleteTask(task.id)}><i className="fa-solid fa-trash-can"></i></button>
          </article>
          ))
        }
    </section>
  )
}
