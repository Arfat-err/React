import { useState } from "react";

export default function App() {
  const [todos, setTodos] = useState([]);         // array of { id, text } [8]
  const [text, setText] = useState("");           // controlled input [10]

  const handleAdd = (e) => {
    e.preventDefault();                           // prevent form reload [8]
    const trimmed = text.trim();                  // basic validation [8]
    if (!trimmed) return;                         // ignore empty items [8]
    setTodos(prev => [
      ...prev,
      { id: crypto.randomUUID(), text: trimmed }  // immutable push + stable id [6]
    ]);
    setText("");                                  // reset input [10]
  };

  return (
    <div style={{ maxWidth: 420, margin: "2rem auto", fontFamily: "sans-serif" }}>
      <h2>Todo List</h2>

      <form onSubmit={handleAdd}>
        <input
          type="text"
          placeholder="Add a task…"
          value={text}
          onChange={(e) => setText(e.target.value)}  // controlled input [10]
          style={{ padding: "8px", width: "70%" }}
        />
        <button type="submit" style={{ padding: "8px 12px", marginLeft: 8 }}>
          Add
        </button>
      </form>

      <ul style={{ marginTop: 16 }}>
        {todos.map(item => (
          <li key={item.id} style={{ padding: "6px 0" }}>
            {item.text}
          </li>
        ))}
      </ul>
    </div>
  );
}
