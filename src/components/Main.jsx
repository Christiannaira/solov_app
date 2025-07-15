import { React, useState } from "react";

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
            <input type="text" value={task} placeholder="Type your new task" onChange={(e) => setTask(e.target.value)}/>
            <button type="button" onClick={addTask}>Add Task</button>
            <ul>
                {taskLists.map((task, index) => {
                    return <li key={index}>{task}</li>
                })}
            </ul>
         </div>
      </div>
   );
};

export default Main;
