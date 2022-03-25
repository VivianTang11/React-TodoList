import React, { useContext } from 'react'
import { GlobalContext } from '../App';

export default function TaskList() {
  
  const ctx = useContext(GlobalContext)
  const tasks = ctx.tasks 
  const setTasks = ctx.setTasks 

  //delete task from state by filtering 
  const deleteTask = (id) => {
    setTasks(tasks.filter((task)=> task.id !== id))
  }

  //toggle completed between false & true
  const completedTask = (id) => {
    setTasks(tasks.map((task) => {
      if (id === task.id) {
        return {
          ...task, completed: !task.completed
        }
      } return task
    }))
  }

  return (
    <section className="task-section">
        <h2>Your Tasks</h2>
        {ctx.tasks.map((task, index) => (
          <article className='task' key={index}>
            <p>{task.text}</p>
            <button onClick={()=> completedTask(task.id)}><i className="fa-solid fa-check"></i></button>
            <button onClick={()=> deleteTask(task.id)}><i className="fa-solid fa-trash-can"></i></button>
          </article>
          ))
        }
    </section>
  )
}
