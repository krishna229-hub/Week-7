import React from 'react'
import AddTask from './AddTask.jsx'
import TaskList from './TaskList.jsx'
import TaskCount from './TaskCount'
import { useState } from 'react'

function TaskManager() {
let [tasks,setTasks]=useState([]);

//add new task
function addNewTask(taskObj) {
  setTasks([...tasks, taskObj]);
}
  return (
    <div>
        <h1 className='text-7xl text-blue-200 mb-10'>Task Manager</h1>
        <div className='flex justify-around'></div>
        <AddTask addNewTask={addNewTask} />
        <TaskCount/>
        <TaskList tasks={tasks}/>
    </div>
  )
}

export default TaskManager