import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  tasks: JSON.parse(localStorage.getItem("tasks")),
};

export const taskSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTasks: (state, action) => {
      const id = nanoid();
      if (!state.tasks) state.tasks = [];
      const date = new Date();
      state.tasks.push({
        id: id,
        text: action.payload.text,
        completed: false,
        priority: action.payload.priority,
        date: date.getTime(),
      });
      localStorage.setItem("tasks", JSON.stringify(state.tasks));
    },
    removeTasks: (state, action) => {
      state.tasks = state.tasks.filter((task) => task.id != action.payload);
      localStorage.setItem("tasks", JSON.stringify(state.tasks));
    },
    editTasks: (state, action) => {
      const index = state.tasks
        .map((item) => item.id)
        .indexOf(action.payload.id);
      state.tasks[index].text = action.payload.text;
      localStorage.setItem("tasks", JSON.stringify(state.tasks));
    },
    toggleCheck: (state, action) => {
      const index = state.tasks
        .map((item) => item.id)
        .indexOf(action.payload.id);
      state.tasks[index].completed = action.payload.completed;
      localStorage.setItem("tasks", JSON.stringify(state.tasks));
    },
    sortByStatus: (state) => {
      state.tasks = state.tasks.filter((task) => task.completed);
    },
    sortByDate: (state) => {
      state.tasks = state.tasks.sort((a, b) => b.date - a.date);
    },
    sortByPriority: (state) => {
      const newState = state.tasks.filter((task) => task.priority === 10);
      newState.push(state.tasks.filter((task) => task.priority === 5));
      newState.push(state.tasks.filter((task) => task.priority === 1));
      state.tasks = newState.flat();
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  addTasks,
  removeTasks,
  editTasks,
  toggleCheck,
  sortByStatus,
  sortByDate,
  sortByPriority,
} = taskSlice.actions;

export default taskSlice.reducer;
