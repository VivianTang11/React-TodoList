import React, { createContext, useContext, useState } from 'react'

const TodoContext = createContext();
export const useTodoContext = () => useContext(TodoContext)

export default function TodoProvider({children}) {
    
    const initialTodoListState = [
        {task:'Cleaning'},
        {task:'Shopping'},
    ]
    const [todoList, setTodoList] = useState(initialTodoListState)
    
    const addTodo = (newTodoItem) => {
        setTodoList([...todoList, {
            task: newTodoItem,
        }])
    }

    const removeTodo = (todoIndex) => {
        const newList = todoList.filter((_, index) => index !== todoIndex)
        setTodoList(newList)
    }

    const contextValue = {
        todoList,
        addTodo,
        removeTodo,
    }
    
    return (
        <TodoContext.Provider value={contextValue}>{children}</TodoContext.Provider>
        )
    }
    