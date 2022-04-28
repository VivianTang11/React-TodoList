import React from 'react'
import { useTodoContext } from '../providers/TodoProvider'

export default function TodoList() {

  const { todoList, removeTodo } = useTodoContext()

  return (
    <ul>
        {todoList.map((todo, index)=>(
            <li key={index}>{todo.task}
                <div className="list-btns">
                  <button onClick={() => removeTodo(index)}><i className="fa-solid fa-trash-can"></i></button>
                </div>
            </li>
        ))}
    </ul>
  )
}
