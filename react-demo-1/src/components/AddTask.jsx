import React from 'react'
import { useForm } from 'react-hook-form'

function AddTask({addNewTask}) {
  const { register, handleSubmit } = useForm();

  const onFormSubmit=(taskObj)=>{
    addNewTask(taskObj)
  }
  return (
    <div>
      <h3 className="text-4xl text-amber-300" >Add Task</h3>
      <form onSubmit={handleSubmit(onFormSubmit)}>
        <div className='mb-3'>
          <input type="text" {...register("taskName")} className='border-2' />
        </div>
        <button type="submit" className='bg-blue-700 text-lime-100 px-3 py-2'>
  Add Task
</button>
      </form>
    </div>
  )
}

export default AddTask