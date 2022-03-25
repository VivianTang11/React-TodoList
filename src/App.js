
function App() {
  return (
    <>
      <header>
        <h1>ToDo-List</h1>
      </header>
      <main>
        <section className="search-section">
          <input type="text" placeholder="Add new task here..."></input>
        </section>
        <sction className="filter-section">
          <h3>All</h3>
          <h3>Uncompleted</h3>
          <h3>Completed</h3>
        </sction>
        <section className="task-section">
          <h2>Your Tasks</h2>
        </section>
      </main>
    </>
  );
}

export default App;
