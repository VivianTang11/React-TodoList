import './App.css';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import TodoProvider from './providers/TodoProvider';

function App() {
  return (
    <>
    <header>
      <h1>ToDo-List</h1>
    </header>
    <main>
      <TodoProvider>
        <TodoForm />
        <TodoList />
      </TodoProvider>
    </main>
  </>

  );
}

export default App;
