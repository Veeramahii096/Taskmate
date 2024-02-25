
import { useEffect, useState } from 'react';
import './App.css';
import AddTask from './components/AddTask';
import Header from './components/Header';
import ShowTask from './components/ShowTask';

function App() {
  const [addTasklist,setAddTasklist]=useState(JSON.parse(localStorage.getItem("addTasklist")) || []);
  const [task, setTask]=useState({})

  useEffect(()=>{
    localStorage.setItem("addTasklist",JSON.stringify(addTasklist))
  },[addTasklist])
  return (
    <div className="App">
      <Header/>
      <AddTask addTasklist={addTasklist} setAddTasklist={setAddTasklist} task={task} setTask={setTask}  />
      <ShowTask addTasklist={addTasklist} setAddTasklist={setAddTasklist} task={task} setTask={setTask}/>
    </div>
  );
}

export default App;
