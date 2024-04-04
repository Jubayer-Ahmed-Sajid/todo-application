import { useForm } from "react-hook-form";
import MyModal from "../Modal/Modal";
import { useDispatch } from "react-redux";
import { addTask } from "../Redux/Features/Tasks/Tasks";
import PropTypes from "prop-types";
import Select from "react-select";

// Options for the "Assign To" dropdown
const assignToOptions = [
  { value: "sajid", label: "Sajid" },
  { value: "jobayer", label: "Jobayer" },
  { value: "david", label: "David" },
  { value: "nathan", label: "Nathan" },
];

// Options for the "Set Priority" dropdown
const priorityOptions = [
  { value: "high", label: "High" },
  { value: "medium", label: "Medium" },
  { value: "low", label: "Low" },
];

// Component for adding a new task

const AddTaskModal = ({ isOpen, setIsOpen, title }) => {
  const dispatch = useDispatch();
  const { register, setValue, handleSubmit } = useForm();
  const onSubmit = (taskData) => {
    // Dispatch action to add task to Redux store
    dispatch(addTask(taskData));
    
  };




  
  return (
    // Modal opening closing
    <MyModal isOpen={isOpen} setIsOpen={setIsOpen}>
      {/* Form starts here */}

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <h2 className="text-xl font-bold text-center">{title}</h2>

        <label className="form-control w-full ">
          <div className="font-semibold label">
            <span className="label-text">Title</span>
          </div>
          <input
            {...register("title", { required: true })}
            type="text"
            placeholder="Title"
            className="input input-bordered w-full "
          />
        </label>

        <label className="form-control w-full ">
          <div className="font-semibold label">
            <span className="label-text">Description</span>
          </div>
          <textarea
            {...register("description", { required: true })}
            type="text"
            placeholder="Description"
            className="textarea textarea-bordered"
          />
        </label>

        <label className="form-control w-full ">
          <div className="font-semibold label">
            <span className="label-text">Deadline</span>
          </div>
          <input
            {...register("date", { required: true })}
            type="date"
            className="border-2 p-2 rounded-md"
            name="date"
            id=""
          />
        </label>

        <label className="form-control w-full ">
          <div className="font-semibold label">
            <span className="label-text">Assign To</span>
          </div>
          <Select
            {...register("assignedTo")}
            id="assignedTo"
            options={assignToOptions}
            onChange={(selectedOption) =>
              setValue("assignedTo", selectedOption.value)
            }
          />
        </label>

        <label className="form-control w-full ">
          <div className="font-semibold label">
            <span className="label-text">Set Priority</span>
          </div>
          <Select
            {...register("priority")}
            id="priority"
            options={priorityOptions}
            onChange={(selectedOptions) =>
              setValue("priority", selectedOptions.value)
            }
          />
        </label>

        <div className="w-full flex justify-center p-4">
          <button type="submit" className="btn btn-primary rounded-lg">
            Add Task
          </button>
        </div>
      </form>
      {/* Form ends here */}
    </MyModal>
  );
};
// Prop types validation for AddTaskModal component
AddTaskModal.propTypes = {
  isOpen: PropTypes.bool,
  setIsOpen: PropTypes.func,
  title: PropTypes.string,
};

export default AddTaskModal;
