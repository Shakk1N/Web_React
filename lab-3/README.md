## Component Tree + Data Flow

![Diagram](./src/assets/diagram-export-9-22-2025-1_16_35-PM.svg)

**Explanation**:  
- `App` stores styles and passes data further.  
- `TodoLists` manages the `todos` array.  
- `AddTodoForm` receives the `onAddTodo` function to add new items.  
- `TodoItem` has a locate state `isCompleted` and receives `task` and `onDelete` via `props`.  
- `Cubes` works with `meshRef` (3D visualization).  
