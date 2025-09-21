import { useState } from "react";

function TodoItem({ task, onDelete }) {
  const [isCompleted, setIsCompleted] = useState(false);

  return (
    <li style={styles.item}>
      <input
        type="checkbox"
        checked={isCompleted}
        onChange={() => setIsCompleted(!isCompleted)}
        style={styles.checkbox}
      />
      <span
        style={{
          ...styles.text,
          textDecoration: isCompleted ? "line-through" : "none",
          color: isCompleted ? "#888" : "#fff",
        }}
      >
        {task.text}
      </span>
      <button onClick={() => onDelete(task.id)} style={styles.deleteBtn}>
        ✕
      </button>
    </li>
  );
}

const styles = {
  item: {
    display: "flex",
    alignItems: "center",
    gap: "12px",
    marginBottom: "12px",
    padding: "12px",
    borderRadius: "8px",
    background: "#2a2a3d",
    boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
    transition: "transform 0.2s",
  },
  checkbox: {
    width: "18px",
    height: "18px",
    cursor: "pointer",
  },
  text: { flex: 1, fontSize: "16px" },
  deleteBtn: {
    border: "none",
    background: "transparent",
    cursor: "pointer",
    fontSize: "18px",
    color: "#ff6b6b",
    transition: "color 0.3s",
  },
};

export default TodoItem;
