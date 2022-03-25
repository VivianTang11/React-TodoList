import React, { createContext, useState } from "react";
import Filter from "./Components/Filter";
import Input from "./Components/Input";
import TaskList from "./Components/TaskList";
import './style.css'

export const GlobalContext = createContext()
export default function App() {

  const [inputText, setInputText] = useState('')
  const [tasks, setTasks] = useState([])



  return (
    <GlobalContext.Provider value={{inputText,setInputText,tasks,setTasks}}>
      <>
        <header>
          <h1>ToDo-List</h1>
        </header>
        <main>
          <Input />
          <Filter />
          
          <TaskList />
        </main>
      </>
    </GlobalContext.Provider>
  );
}

