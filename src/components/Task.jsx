import React from 'react'

const Task = ({task}) => {
  return (
    <div className='task'>
      <div className="task_content">
        {task}
      </div>
    </div>
  )
}

export default Task
