import { ArrowRightIcon, TrashIcon } from "@heroicons/react/24/solid";
import PropTypes from 'prop-types'
import { useDispatch } from "react-redux";
import { removeTask, updateStatus } from "../Redux/Features/Tasks/Tasks";


const TaskCard = ({item}) => {
  
  const dispatch = useDispatch()
  let updatedStatus;
  if(item.status === "pending"){
    updatedStatus = 'running'
  } else if (item.status === 'running'){
    updatedStatus = 'completed'
  } else {
    updatedStatus = 'archive'
  }
  return (
    <div className="space-y-3 bg-secondary/20 p-6 mt-6 rounded-sm">
      <p className="text-red-500 text-xl">{item?.title}</p>
      <p className="">{item?.description}</p>
      <p className="">Assigned To: {item?.assignedTo}</p>
      <div className="flex items-center justify-between">
        <p className="">{item?.date}</p>

        <div className="flex items-center gap-6">
          <button onClick={()=> dispatch(updateStatus( {id:item.id, status:updatedStatus} ))}>
           
            <ArrowRightIcon className="w-6 h-6"></ArrowRightIcon>
          </button>
          <button onClick={()=> dispatch(removeTask(item.id))}>
          
            <TrashIcon className="w-6 text-red-500 h-6"></TrashIcon>
          </button>
        </div>
      </div>
    </div>
  );
};
TaskCard.propTypes={
  item: PropTypes.object

}

export default TaskCard;










