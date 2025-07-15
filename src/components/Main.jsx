import { React, useState } from "react";
import Task from "./Task";

const Main = () => {
   const [task, setTask] = useState("");
   const [taskLists, setTaskLists] = useState([]);

   const addTask = () => {

        if (task != "") {
            
            setTaskLists([...taskLists, task]);
            setTask("");

        }

   }

   return (
      <div className="main">

         <div className="main_content">
             <h1>Solov Task Tracker</h1>
            <input className="task_input" type="text" value={task} placeholder="Type your new task" onKeyDown={(e) => {
                if (e.key === "Enter") {
                    addTask();
                }
            }} onChange={(e) => setTask(e.target.value)}/>
            <button className="task_btn" type="button" onClick={addTask}>Add Task</button>
            <ul className="task_list">
                {taskLists.map((task, index) => {
                     return <Task key={index} task={task}/>
                })}
            </ul>
         </div>
      </div>
   );
};

export default Main;
