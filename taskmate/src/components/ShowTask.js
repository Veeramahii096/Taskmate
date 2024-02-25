import React from 'react'

const ShowTask = ({addTasklist ,setAddTasklist,task,setTask}) => {
    const handleDelete=(id)=>{
        const updatedTasklist=addTasklist.filter(todo => todo.id !== id);
        setAddTasklist(updatedTasklist)
    }
    const  handleEdit=(id)=>{
        const selectedTask=addTasklist.find(todo=> todo.id === id);
        setTask(selectedTask);

    }
  return (

    <section className='showTask'>
        <div className='head'>
            <div>
                <span className='title'>TODO
                </span>
                <span className='count'>{addTasklist.length}</span>
            </div>
            <button className='clearAll' onClick={()=>setAddTasklist([])}>ClearAll</button>
        </div>
        <ul>
            {addTasklist.map((todo)=>( <li key={todo.id}>
                <p>
                    
                    <span className='name'>{todo.name}</span>
                    <span className='time'>{todo.time}</span>
                </p>
                <i className='bi bi-pencil-square'  onClick={()=>handleEdit(todo.id)} ></i>
                <i className='bi bi-trash' onClick={()=>handleDelete(todo.id)}></i>
            </li>))}
           
        </ul>
    </section>
  )
}

export default ShowTask
