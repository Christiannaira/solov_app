import { memo } from "react"

const Task = ({task}) => {

  console.log("hello world")
 
  return (
    <div className='task'>
      <h3>{task.task}</h3>
    </div>
  )
}

export default Task
