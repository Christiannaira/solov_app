import { useState } from "react";
import Task from "./Task";

const Main = () => {

   const [task, setTask] = useState("");
   const [taskLists, setTaskLists] = useState([]);

   const addTask = () => {

        alert("hello world");

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
               <Task />
               {task}
            </div>
         </div>
      </>
   );
};

export default Main;
