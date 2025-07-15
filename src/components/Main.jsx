import { React, useState } from "react";

const Main = () => {
   const [task, setTask] = useState("");

   return (
      <div className="main">

         <div className="main_content">
             <h1>Solov Task Tracker</h1>
            <input type="text" placeholder="Type your new task" />
            <button type="button">Add Task</button>
         </div>
      </div>
   );
};

export default Main;
