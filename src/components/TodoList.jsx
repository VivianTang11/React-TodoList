import React from 'react'
import { useTodoContext } from '../providers/TodoProvider'

export default function TodoList() {

  const { todoList, removeTodo, completedTodo } = useTodoContext()

  return (
    <ul>
        {todoList.map((todo, index)=>(
            <li key={index}>{todo.task}
                <button onClick={() => completedTodo(index)}><i className="fa-solid fa-check"></i></button>
                <button onClick={() => removeTodo(index)}><i className="fa-solid fa-trash-can"></i></button>
            </li>
        ))}
    </ul>
  )
}
