import TodoList from "./components/TodoList";
import Cube from "./components/Cube";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

export default function App() {
  return (
    <div style={{ width: "100vw", height: "100vh", margin: 0, padding: 0 }}>
      <Canvas>
        <ambientLight intensity={0.5} />
        <directionalLight position={[2, 5, 2]} intensity={2} />
        <Cube />
        <OrbitControls enableZoom={true} />
      </Canvas>

      <div style={{
        position: "absolute",
        top: "20px",
        left: "20px",
        width: "400px",
        backgroundColor: "rgba(255,255,255,0.8)",
        padding: "20px",
        borderRadius: "10px",
      }}>
        <h1 style={{ textAlign: "center", marginBottom: "20px", color: "#2a2a3d" }}>To-Do List</h1>
        <TodoList />
      </div>
    </div>
  );
}


