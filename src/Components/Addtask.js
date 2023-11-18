import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { AddTask } from "../Redux/Actions/Actions";
function Addtask(){
    const [desc, setdesc] = useState("")
  const [isdone, setisdone] = useState(false)
  const dispatch=useDispatch()

  const handleClick=()=>{
  dispatch(AddTask(desc,isdone))
}


return (
    <div>
    <h3>Add task:</h3>
        <input onChange={(e)=>setdesc(e.target.value)} />
        <input className='inp-task' type='checkbox' onChange={(e)=>setisdone(!isdone)} />
        <button onClick={handleClick}  >save</button>
    </div>
  )
}

export default Addtask