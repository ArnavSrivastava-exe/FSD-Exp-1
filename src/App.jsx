import { useState } from "react";

function App() {
  /* Experiment 1: Counter */
  const [count, setCount] = useState(0);

  /* Experiment 2: To-Do List */
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  /* Experiment 3: Theme Toggle */
  const [dark, setDark] = useState(false);

  /* Experiment 4: Simple Form */
  const [name, setName] = useState("");

  const addTask = () => {
    if (task !== "") {
      setTasks([...tasks, task]);
      setTask("");
    }
  };

  return (
    <div
      style={{
        background: dark ? "black" : "white",
        color: dark ? "white" : "black",
        minHeight: "100vh",
        padding: "20px",
      }}
    >
      <h1> Single Page Application</h1>

      {/* Experiment 1: Counter SPA */}
      <hr />
      <h2>Experiment 1: Counter SPA</h2>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={() => setCount(count - 1)}>-</button>

      {/* Experiment 2: To-Do List SPA */}
      <hr />
      <h2>Experiment 2: To-Do List SPA</h2>
      <input
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Enter task"
      />
      <button onClick={addTask}>Add</button>

      <ul>
        {tasks.map((t, i) => (
          <li key={i}>{t}</li>
        ))}
      </ul>

      {/* Experiment 3: Theme Toggle SPA */}
      <hr />
      <h2>Experiment 3: Theme Toggle SPA</h2>
      <button onClick={() => setDark(!dark)}>
        Toggle Theme
      </button>

      {/* Experiment 4: Simple Form SPA */}
      <hr />
      <h2>Experiment 4: Simple Form SPA</h2>
      <input
        placeholder="Enter name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <p>Hello, {name}</p>
    </div>
  );
}

export default App;
