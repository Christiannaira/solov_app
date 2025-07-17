import { useState } from "react";
import { memo } from "react";
import Task from "./Task";

const Main = () => {

   const [task, setTask] = useState("");
   const [taskLists, setTaskLists] = useState([]);

   const addTask = () => {

        const completed = false;

        const newTask = {task: task, completed: completed};

        setTaskLists((prev) => {
            return([...prev, newTask]);
        })

   }

   

   return (
      <>
         <div className="main">
            <h1 className="main_headline">Solov</h1>
            <div className="main_content">
               <div className="main_content-input">
                    <input type="text" className="main_input" placeholder="new task" onChange={
                        (e) => setTask(e.target.value)
                    } onKeyDown={(e) => {
                        if (e.key === "Enter") {
                            addTask();
                        }
                    }}/>
                    <button className="main_btn" onClick={addTask}>Add Task</button>
               </div>

               <div className="main_content_tasks">
                    {taskLists.map((task, index) => {
                        return <Task key={index} task={task} id={index} taskLists={taskLists} setTaskLists={setTaskLists}/>
                    })}
               </div>

            </div>
         </div>
      </>
   );
};

export default memo(Main);
