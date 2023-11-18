import React from 'react'

function Task({el}) {
  return (
    <div className='box-task' >
           <h2 className='id-task'>{el.id}</h2> 
           <p className='desc-task'>{el.description}</p>
           <input className='inp-task' type='checkbox' checked={el.isDone} />
    </div>
  )
}

export default Task