import React from 'react'

function TaskList({tasks}) {
  return (
    <div>
        <h3 className='text-4xl  text-lime-200 mb-3'>Task List</h3>
        {
            tasks.map((taskObj,index)=><p key={index}>{taskObj.taskname}</p>)
        }
    </div>
  )
}

export default TaskList