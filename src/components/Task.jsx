import { memo } from "react"

const Task = ({task}) => {
 
  return (
    <div className='task'>
      <h3 className="task_title">{task.task}</h3>
       <button className="task_btn">Completed</button>
    </div>
  )
}

export default memo(Task);
