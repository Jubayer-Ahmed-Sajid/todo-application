import { ArrowRightIcon, TrashIcon } from "@heroicons/react/24/solid";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { removeTask, updateStatus } from "../Redux/Features/Tasks/Tasks";

const TaskCard = ({ task }) => {
  const dispatch = useDispatch();
  
 // Calculate status update 
 const updatedStatus = task.status === "pending" ? "running" : "completed";

  return (
    <div className="space-y-4 bg-secondary/20 p-6 mt-6 rounded-sm">
      <p
        className={`text-lg font-semibold mb-3  ${
          task?.priority === "high" ? "text-red-500" : ""
        } ${task?.priority === "medium" ? "text-yellow-500" : ""} ${
          task?.priority === "low" ? "text-green-500" : ""
        }`}
      >
        {task?.title}
      </p>
      <p className="">{task?.description}</p>
      <p className="text-gray-600">Assigned To: {task?.assignedTo}</p>
      <div className="flex tasks-center justify-between">
        <p className="">{task?.date}</p>

        <div className="flex tasks-center gap-6">
          {/*  Dispatch action to update the task status */}
          <button
            onClick={() =>
              dispatch(updateStatus({ id: task.id, status: updatedStatus }))
            }
          >
            <ArrowRightIcon className="w-6 h-6"></ArrowRightIcon>
          </button>
          {/* Dispatch action to delete task */}
          <button onClick={() => dispatch(removeTask(task.id))}>
            <TrashIcon className="w-6 text-red-500 h-6"></TrashIcon>
          </button>
        </div>
      </div>
    </div>
  );
};
// Prop type validation
TaskCard.propTypes = {
  task: PropTypes.object,
};

export default TaskCard;
