import React, { createContext, useContext, useState } from 'react'

const TodoContext = createContext();
export const useTodoContext = () => useContext(TodoContext)

export default function TodoProvider({children}) {
    
    const initialTodoListState = [
        {task:'Cleaning', completed: false},
        {task:'Shopping', completed: false},
    ]
    const [todoList, setTodoList] = useState(initialTodoListState)
    console.log(todoList);
    
    const addTodo = (newTodoItem) => {
        setTodoList([...todoList, {
            task: newTodoItem,
            completed: false,
        }])
    }

    const removeTodo = (todoIndex) => {
        const newList = todoList.filter((_, index) => index !== todoIndex)
        setTodoList(newList)
    }

    const completedTodo = (todoIndex) => {
        setTodoList(todoList.map((task) => {
            // console.log(task);
            if (todoIndex === task.todoIndex) {
              return {
                ...task, 
                completed: !task.completed
              }
            } return task
          }))
    }

    const contextValue = {
        todoList,
        addTodo,
        removeTodo,
        completedTodo,
    }
    
    return (
        <TodoContext.Provider value={contextValue}>{children}</TodoContext.Provider>
        )
    }
    