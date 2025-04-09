import React from 'react'
import styles from './Css/TodoList.module.css'

const TodoList = () => {
 const [task, setTask] = React.useState({
  title: "",
  description: "",
 })

 const [tasks,setTasks] = React.useState([])

 const addTask =()=>{
  if(task.title.trim() == "" || task.description.trim() == "")return;
  setTasks([...tasks, task])
  setTask({title:"", description:""})
 }
  
 
  
  return (
    <>
      <div className={styles.container}>
        <div className={styles.title}>
          <h1>To-do List</h1>
        </div>
        <div className={styles.inputs}>
          <input type='text' placeholder='Tarefa' value={task.title} onChange={(valor) => setTask({...task, title: valor.target.value})}/>
          <input type='text' placeholder='Tarefa' value={task.description} onChange={(valor) => setTask({...task, description: valor.target.value})}/>
        </div>
          <button onClick={addTask}>Adicionar</button>
        <ul className={styles.informations}>
          {tasks.map((item,index) => (
              <li key={index}>
                <h2>{item.title}</h2>
                <p>{item.description}</p>
              </li>
          ))}
        </ul>
      </div>
    </>
  )
}

export default TodoList