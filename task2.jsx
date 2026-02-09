import React, { useState } from "react";

function App() {

  const [tasks, setTasks] = useState([
    "java",
    "task",
    "react",
    "sumithra",
    
  ]);

  const [input, setInput] = useState("");

  const addTask = () => {
    if (input.trim() === "") return;
    setTasks([...tasks, input]);
    setInput("");
  };

const deleteTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  return (
    <div style={{ padding: "20px" }}>
      <input
        type="text"
        placeholder="Enter Item"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />


      <button onClick={addTask}>Add</button>

      <ul style={{ listStyle: "none", padding: 0 }}>
        {tasks.map((task, index) => (
          <li key={index} style={{ marginTop: "10px" }}>
            {task}
            <button
              style={{ marginLeft: "10px" }}
              onClick={() => deleteTask(index)}
            >
              X
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;