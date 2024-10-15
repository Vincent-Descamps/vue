const express = require("express");
const cors = require("cors");
const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

let tasks = [
	{
		id: 1,
		title: "Task 1",
		completed: false
	},
	{
		id: 2,
		title: "Task 2",
		completed: false
	},
	{
		id: 3,
		title: "Task 3",
		completed: false
	}
];


// GET request to fetch all tasks
app.get("/api/tasks", (req, res) => {
	res.json(tasks);
});

// POST request to add new task
app.post("/api/tasks", (req, res) => {
	const newTask = { id: tasks.length + 1, title: req.body.title, completed: false };
	tasks.push(newTask);
	res.status(201).json(newTask);
});

// DELETE request to delete a task
app.delete("/api/tasks/:id", (req, res) => {
	const taskId = parseInt(req.params.id);
	tasks = tasks.filter(task => task.id !== taskId);
	res.status(204).send();
});

app.listen(port, () => {
	console.log(`Server listening on port ${port}`);
});
