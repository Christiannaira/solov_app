import Task from "./Task";

const Main = () => {
   return (
      <>
         <div className="main">
            <h1 className="main_headline">Solov</h1>
            <div className="main_content">
               <div className="main_content-input">
                    <input type="text" className="main_input" />
                    <button className="main_btn">Add Task</button>
               </div>
               <Task />
            </div>
         </div>
      </>
   );
};

export default Main;
