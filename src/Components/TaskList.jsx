import React from 'react'
import Task from './Task'

export default function TaskList() {
  return (
    <section className="task-section">
        <h2>Your Tasks</h2>
        <Task />
        <Task />
    </section>
  )
}
