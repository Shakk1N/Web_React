import { useState } from "react";

function AddTodoForm({ onAddTodo }) {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim() === "") return;
    onAddTodo(input);
    setInput("");
  };

  return (
    <form onSubmit={handleSubmit} style={styles.form}>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter a task"
        style={styles.input}
      />
      <button type="submit" style={styles.button}>
        Add
      </button>
    </form>
  );
}

const styles = {
  form: { display: "flex", gap: "10px", marginBottom: "20px" },
  input: {
    flex: 1,
    padding: "10px",
    borderRadius: "8px",
    border: "none",
    outline: "none",
    fontSize: "16px",
    background: "#2a2a3d",
    color: "#fff",
  },
  button: {
    padding: "10px 18px",
    borderRadius: "8px",
    border: "none",
    cursor: "pointer",
    background: "#61dafb",
    color: "#1e1e2f",
    fontWeight: "bold",
    transition: "all 0.3s ease",
  },
};

export default AddTodoForm;
