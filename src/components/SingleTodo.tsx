import React, { FormEvent, useState, useRef, useEffect } from "react";
import Todo from "../model";
import styles from "../style/singletodo.module.css";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { MdDone } from "react-icons/md";

type Props = {
  task: Todo;
  setTodoList: React.Dispatch<React.SetStateAction<Todo[]>>;
  todoList: Todo[];
  setTodo: React.Dispatch<React.SetStateAction<string>>;
};

function SingleTodo(props: Props) {
  const { task, setTodoList, todoList, setTodo } = props;
  const [isEdit, setIsEdit] = useState(false);
  const [temp, setTemp] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  const handleDelete = (id: string) => {
    setTodoList(todoList.filter((todo) => todo.id !== id));
  };
  const handleDone = (id: string) => {
    setTodoList(
      todoList.map((todo) =>
        todo.id === id ? { ...todo, isDone: !task.isDone } : todo
      )
    );
    console.log(task.isDone);
  };

  const handleEdit = (e: FormEvent, id: string) => {
    e.preventDefault();
    setTodoList(
      todoList.map((todo) => (todo.id === id ? { ...todo, todo: temp } : todo))
    );
    setIsEdit(!isEdit);
    setTemp("");
  };
  const clickIt = () => {
    setIsEdit(!isEdit);
  };
  useEffect(()=>{
    inputRef.current?.focus();
  },[isEdit])

  return (
    <form
      onSubmit={(e) => handleEdit(e, task.id)}
      className={styles.singletodo_container}
    >
      <span className={task.isDone ? styles.strike : ""}>
        {isEdit ? (
          <input
            ref={inputRef}
            value={temp}
            onChange={(e) => setTemp(e.target.value)}
            placeholder="Edited task"
            className={styles.edit_input}
          />
        ) : (
          task.todo
        )}
      </span>
      <div className={styles.singletodo_icons}>
        <span>
          <FaEdit onClick={clickIt} />
        </span>
        <span onClick={() => handleDelete(task.id)}>
          <MdDelete />
        </span>
        <span onClick={() => handleDone(task.id)}>
          <MdDone />
        </span>
      </div>
    </form>
  );
}

export default SingleTodo;
