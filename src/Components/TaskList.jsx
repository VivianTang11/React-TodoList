import React, { useContext } from 'react'
import { GlobalContext } from '../App';

export default function TaskList() {
  
  const ctx = useContext(GlobalContext)

  return (
    <section className="task-section">
        <h2>Your Tasks</h2>
        {ctx.tasks.map((task, index) => (
          <article className='task' key={index}>
            <input type="checkbox" />
            <p>{task.text}</p>
          </article>
          ))
        }
    </section>
  )
}
