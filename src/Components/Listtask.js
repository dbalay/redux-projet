
import React from 'react'
import Task from "./Task"

import { useSelector } from 'react-redux'

function ListTask() {
    const data=useSelector(state=>state.todo)
  console.log(data)
  return (
    <div>
    <h3>TASK:</h3>
       {data.map((el)=><Task  el={el}  />)}
    </div>
  )
}

export default ListTask