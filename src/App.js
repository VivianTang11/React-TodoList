import React, { createContext, useState } from "react";
import Filter from "./Components/Filter";
import Search from "./Components/Search";
import TaskList from "./Components/TaskList";
import './style.css'

export default function App() {

  return (
      <>
        <header>
          <h1>ToDo-List</h1>
        </header>
        <main>
          <Search />
          <Filter />
          <TaskList />
        </main>
      </>
  );
}

