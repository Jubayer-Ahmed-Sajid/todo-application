import { createSlice } from "@reduxjs/toolkit";

const getTasks =
  localStorage.getItem("tasks") !== null
    ? JSON.parse(localStorage.getItem("tasks"))
    : [];

const initialState = {
  tasks: getTasks,
};
const taskSlice = createSlice({
  name: "tasksSlice",
  initialState,
  reducers: {
    addTask: (state, { payload }) => {
      console.log(payload);
      if (state.tasks.length === 0) {
        state.tasks.push({ id: 1, status: "pending", ...payload });
      } else {
        const lastElement = state.tasks.at(-1);
        state.tasks.push({
          id: lastElement.id + 1,
          status: "pending",
          ...payload,
        });
      }
      localStorage.setItem(
        "tasks",
        JSON.stringify(state.tasks.map((task) => task))
      );
    },

    removeTask: (state, { payload }) => {
      state.tasks = state.tasks.filter((item) => item.id !== payload);
      localStorage.removeItem(
        "tasks",
        state.tasks.find((task) => task.id === payload)
      );
    },
    updateStatus: (state, { payload }) => {
      const { id, status } = payload;
      // Find the index of the task to update in the tasks array
      const taskIndex = state.tasks.findIndex((task) => task.id === id);
      if (taskIndex !== -1) {
        // Create a copy of the tasks array to avoid mutating the original state
        const updatedTasks = [...state.tasks];

        // Update the status of the task at the found index
        updatedTasks[taskIndex].status = status;
        // Update local storage with the modified tasks array
        localStorage.setItem("tasks", JSON.stringify(updatedTasks));
        // Update state with the modified tasks array
        state.tasks = updatedTasks;
      }
    },
  },
});
export const { addTask, removeTask, updateStatus } = taskSlice.actions;
export default taskSlice.reducer;
