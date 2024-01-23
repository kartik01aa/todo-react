import React, { FormEvent } from 'react'
import Todo from '../model'
import styles from '../style/singletodo.module.css'
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { MdDone } from "react-icons/md";

type Props = {
     task:Todo,
     setTodoList: React.Dispatch<React.SetStateAction<Todo[]>>,
     todoList:Todo[]
}

function SingleTodo(props:Props) {
     const {task, setTodoList, todoList} = props;

     const handleDelete = (id:string)=>{
          setTodoList(todoList.filter((todo)=> todo.id !== id ))
     }
     const handleDone = (id:string)=>{
          setTodoList(todoList.map((todo)=>
               todo.id === id ? {...todo, isDone:!task.isDone} : todo
          ))
          console.log(task.isDone) 
     }

  return (
    <div className={styles.singletodo_container}>
     <span className={task.isDone ? styles.strike : ""} >{task.todo}</span>
     <div className={styles.singletodo_icons}>
          <span><FaEdit /></span>
          <span onClick={()=>handleDelete(task.id)}><MdDelete /></span>
          <span onClick={()=>handleDone(task.id)} ><MdDone /></span>
     </div>
    </div>
  )
}

export default SingleTodo