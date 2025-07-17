import { memo } from "react"

const Task = ({task}) => {
 
  return (
    <div className='task'>
      <h3>{task.task}</h3>
    </div>
  )
}

export default memo(Task);
