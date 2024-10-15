<template>
  <div>
    <h1>Task Manager</h1>
    <input v-model="newTask" placeholder="Add a new task" @keyup.enter="addTask" />
    <ul>
      <li v-for="task in tasks" :key="task.id">
        {{ task.title }}
        <button @click="deleteTask(task.id)">Delete</button>
      </li>
    </ul>
  </div>
</template>

<script setup>
import axios from "axios";
import { onMounted, ref } from "vue";

const tasks = ref([]);
const newTask = ref("");

onMounted(() => {
  fetchTasks();
});

const fetchTasks = () => {
  axios.get("http://localhost:3000/api/tasks").then((response) => {
    tasks.value = response.data;
  });
};

const addTask = () => {
  if (!newTask.value) return;
  axios
    .post("http://localhost:3000/api/tasks", { title: newTask.value })
    .then((response) => {
      tasks.value.push(response.data);
      newTask.value = "";
    });
};

const deleteTask = (id) => {
  axios.delete(`http://localhost:3000/api/tasks/${id}`).then(() => {
    tasks.value = tasks.value.filter((task) => task.id !== id);
  });
};
</script>
