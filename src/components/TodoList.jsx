import React from 'react'
import styles from './Css/TodoList.module.css'

const TodoList = () => {
 const [task, setTask] = React.useState("")
 const [tasks,setTasks] = React.useState([])

 const addTask =()=>{
  if(task.trim() == "")return;
  setTasks([...tasks, task])
  setTask("")
 }
  
  
  
  return (
    <>
      <div className={styles.container}>
        <div className={styles.title}>
          <h1>To-do List</h1>
        </div>
        <div className={styles.inputs}>
          <input type='text' placeholder='Tarefa' value={task} onChange={(valor) => setTask(valor.target.value)}/>
          <button onClick={addTask}>Adicionar</button>
        </div>
        <ul className={styles.informations}>
          {tasks.map((taskItem,index) => (
            <li key={index}>{taskItem}</li>

          ))}
        </ul>
      </div>
    </>
  )
}

export default TodoList