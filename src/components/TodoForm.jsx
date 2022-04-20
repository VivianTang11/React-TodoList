import React, { useState } from 'react'
import { useTodoContext } from '../providers/TodoProvider'

export default function TodoForm() {
  
  const {todoList, addTodo} = useTodoContext()
  const [todoItem, setTodoItem] = useState('')

  const handleOnSubmit = (e) => {
      e.preventDefault()
      if (!todoItem) {
          return
      }
      addTodo(todoItem)
      setTodoItem('') //clear inputfield
  }

  return (
    <form onSubmit={handleOnSubmit}>
      <h3>Number of todo items: {todoList.length}</h3>
      <input type="text" value={todoItem} onChange={(e) => setTodoItem(e.target.value)}/>
      <button type='submit'>Submit</button>
    </form>
  )
}
