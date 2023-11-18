
import { ADD,Search } from "../Const/Const"

export const AddTask=(desc,isdone)=>{
 return { type:ADD,payload:{description:desc,isDone:isdone}}
}
export const Filter=()=>{
return {type:Search}
}