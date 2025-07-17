import { memo, useState } from "react";

const Task = ({ task, id, taskLists, setTaskLists }) => {
   const [status, setStatus] = useState(task.completed);

   console.log(taskLists);

   const handleUpdate = () => {
      setTaskLists((tasks) =>
         tasks.map((task, index) =>
            status
               ? index === id
                  ? { ...task, completed: false }
                  : task
               : index === id
               ? { ...task, completed: true }
               : task
         )
      );

      setStatus(!status);
   };

   const handleRemove = () => {

      setTaskLists((tasks) =>
         tasks.filter((task, index) => index !== id)
      );

   }

   return (
      <div
         className={status ? "task task_completed " : "task task_not-completed"}
      >
         <h3 className="task_title">{task.task}</h3>
         <div className="task_btns">
            <button className="task_btn" onClick={handleRemove}>Remove</button>
            <button
               className={
                  status ? "task_btn completed " : "task_btn not-completed"
               }
               onClick={handleUpdate}
            >
               {status ? "Completed" : "Not Completed"}
            </button>
         </div>
      </div>
   );
};

export default memo(Task);
