import TodoList from "./components/TodoList";
import Cube from "./components/Cube";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

export default function App() {
  return (
    <div style={styles.container}>
      <div style={styles.todo}>
        <h1 style={styles.title}>To-Do List</h1>
        <TodoList />
      </div>

      <div style={styles.cube}>
        <Canvas>
          <ambientLight intensity={0.5} />
          <directionalLight position={[2, 5, 2]} intensity={2} />
          <Cube />
          <OrbitControls enableZoom={true} />
        </Canvas>
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "center",
    gap: "40px",
    padding: "40px",
  },
  todo: {
    width: "400px",
  },
  title: {
    textAlign: "center",
    marginBottom: "20px",
  },
  cube: {
    width: "300px",
    height: "300px",
  },
};
