import {
  BellAlertIcon,
  MagnifyingGlassCircleIcon,
} from "@heroicons/react/24/outline";
import profile from "../assets/avatar.png";
import TaskCard from "../Components/Tasks/TaskCard";
import { useState } from "react";
import AddTaskModal from "../Components/Tasks/AddTaskModal";
import { useSelector } from "react-redux";

const Tasks = () => {
    const [isOpen,setIsOpen] = useState(false)
    const {tasks} = useSelector(state=> state.tasksSlice)
 console.log(tasks);
    const pending = tasks.filter(task => task.status ==="pending");
    const running = tasks.filter(task => task.status ==="running");
    const completed = tasks.filter(task => task.status ==="completed");
  return (
    <div className="grid w-full grid-cols-12">
      <div className="p-10 col-span-9">
        <div className="flex justify-between">
          <h2 className="text-2xl font-bold">Tasks</h2>
          <div className="flex  gap-4 ">
            <button className="border-2 border-secondary/20 hover:border-primary hover:bg-primary rounded-xl h-10 w-10  grid place-content-center text-secondary hover:text-white transition-all">
              <MagnifyingGlassCircleIcon className="h-6 w-6"></MagnifyingGlassCircleIcon>
            </button>
            <button className="border-2 border-secondary/20 hover:border-primary hover:bg-primary rounded-xl h-10 w-10  grid place-content-center text-secondary hover:text-white transition-all">
              <BellAlertIcon className="h-6 w-6"></BellAlertIcon>
            </button>
            <button onClick={()=>setIsOpen(!isOpen)} className="btn btn-primary">Add Task</button>
            <AddTaskModal title="Add Task" isOpen={isOpen} setIsOpen={setIsOpen}></AddTaskModal>

            <img src={profile} className="w-12 h-12" alt="" />
          </div>
        </div>

        <div className="grid gap-4 mt-8  grid-cols-3">
          <div>
            <div className="bg-primary/20 rounded-md p-6">Pending</div>
            {
              pending && pending.map (task=>  <TaskCard item={task} key={task.id}></TaskCard>)
            }
         
          </div>
          <div>
            <div className="bg-primary/20 rounded-lg p-6">Running</div>
            {
              running && running.map (task=>  <TaskCard item={task} key={task.id}></TaskCard>)
            }
         
          </div>
          <div>
            <div className="bg-primary/20 rounded-lg p-6">Completed</div>
            {
              completed && completed.map (task=>  <TaskCard item={task} key={task.id}></TaskCard>)
            }
         
          </div>
        </div>
      </div>

      <div className="col-span-3 space-y-3 border-secondary/20 pl-6 border-l-2 h-screen">
        <h2 className="text-xl py-4">Member</h2>
        <div className="flex gap-2">
          <img src={profile} className="w-12 h-12" alt="" />
          <img src={profile} className="w-12 h-12" alt="" />
          <img src={profile} className="w-12 h-12" alt="" />
          <img src={profile} className="w-12 h-12" alt="" />
        </div>
        <div>
          <h2 className="text-xl">My Tasks</h2>
        </div>
      </div>
    </div>
  );
};

export default Tasks;
