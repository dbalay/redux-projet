
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import ListTask from './Components/Listtask.js' ;
import Addtask from './Components/Addtask';
import { useState } from 'react';
import { Filter } from './Redux/Actions/Actions.js';

function App() {
  const  dispatch=useDispatch()
    return (
    <div className="App">
      <h2>Filter by done :</h2>
      <input type="checkbox" onClick={()=> dispatch(Filter())} />
    <Addtask />
    <ListTask />
   
    </div>
  );
}

export default App;