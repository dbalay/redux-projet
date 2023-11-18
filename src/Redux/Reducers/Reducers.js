
import { ADD,Search } from "../Const/Const"


const initialState={
    todo:[
    { description: "hello", user: "user1" ,id:1,isDone:true},
    { description: "hi", user: "user2",id:2,isDone:false},
    { description: "welcome", user: "user3",id:3,isDone:false},
]}

export const todoReducer=(state=initialState,action)=>{

switch (action.type) {
     case ADD:
        return {...state,todo:[...state.todo,{...action.payload,id:state.todo.length+1}]}
     case Search :
        return {...state,todo:[state.todo.filter(el=>el.isDone==true)]}
        default:
            return state
 }
}
