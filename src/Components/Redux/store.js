import { configureStore } from "@reduxjs/toolkit";
import Tasks from "./Features/Tasks/Tasks";

export const store = configureStore({
    reducer:{
        tasksSlice:Tasks
    }
})