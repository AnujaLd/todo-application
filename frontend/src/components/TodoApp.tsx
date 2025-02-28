import { useState, useEffect } from "react";
import {TextField,Button,Card,Typography,Container,Box} from "@mui/material";
import { getTodos, createTodo, toggleTodo } from "../REST_URLs/rest_url";

const TodoApp = () => {
  interface Task {
    id: number;
    title: string;
    description: string;
  }

  const [tasks, setTasks] = useState<Task[]>([]);
  const [newTask, setNewTask] = useState({ title: "", description: "" });

  useEffect(() => {
    const fetchTodos = async () => {
      const result = await getTodos();
      setTasks(result.data.filter((task: any) => !task.completed));
    };
    fetchTodos();
  }, []);

  const handleAddTask = async () => {
    if (newTask.title.trim() && newTask.description.trim()) {
      const result = await createTodo(newTask.title, newTask.description);
      if (result.success) {
        setTasks((prev) => [result.data, ...prev.slice(0, 4)]);
        setNewTask({ title: "", description: "" });
      }
    }
  };

  const handleCompleteTask = async (id: number) => {
    await toggleTodo(id);
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <Container
      maxWidth="lg"
      sx={{
        padding: 4,
        backgroundColor: "#f5f5f5",
        borderRadius: 2,
        minHeight: "100vh",
      }}
    >
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", md: "1fr 2fr" },
          gap: 3,
        }}
      >
        {/* Left Side - Add Task */}
        <Box
          sx={{
            backgroundColor: "#ffffff",
            padding: 3,
            borderRadius: 2,
            boxShadow: 2,
          }}
        >
          <Typography variant="h6" gutterBottom>
            Add a Task
          </Typography>
          <TextField
            label="Title"
            fullWidth
            variant="outlined"
            value={newTask.title}
            onChange={(e) => setNewTask({ ...newTask, title: e.target.value })}
            margin="normal"
          />
          <TextField
            label="Description"
            fullWidth
            variant="outlined"
            value={newTask.description}
            onChange={(e) =>
              setNewTask({ ...newTask, description: e.target.value })
            }
            margin="normal"
          />
          <Button
            variant="contained"
            sx={{ backgroundColor: "#0000FF", color: "#fff", mt: 2 }}
            fullWidth
            onClick={handleAddTask}
          >
            Add
          </Button>
        </Box>

        {/* Right Side - Task List */}
        <Box>
          {tasks.map((task) => (
            <Card
              key={task.id}
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                backgroundColor: "#D3D3D3",
                padding: 2,
                mb: 2,
              }}
            >
              <Box>
                <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                  {task.title}
                </Typography>
                <Typography>{task.description}</Typography>
              </Box>
              <Button
                variant="contained"
                sx={{ backgroundColor: "#A9A9A9", color: "#000" }}
                onClick={() => handleCompleteTask(task.id)}
              >
                Done
              </Button>
            </Card>
          ))}
        </Box>
      </Box>
    </Container>
  );
};

export default TodoApp;
