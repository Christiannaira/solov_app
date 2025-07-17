import React from 'react'

const Task = ({task, id}) => {

  const handleComplete = (id) => {
    alert(id);
  }

  return (
    <div className='task'>
      <div className="task_content">
        <h3 className='task_name'>{task}</h3>
        <button type='button' className='done_btn' onClick={() => {
          handleComplete(id);
        }}>done</button>
      </div>
    </div>
  )
}

export default Task
