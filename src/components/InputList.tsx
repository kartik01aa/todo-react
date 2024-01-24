import React, { useState } from "react";
import styles from "../style/inputlist.module.css";
import Todo from "../model";
import SingleTodo from "./SingleTodo";

type Props = {
  todoList: Todo[];
  setTodoList: React.Dispatch<React.SetStateAction<Todo[]>>;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
};

function InputList(props: Props) {
  const { todoList, setTodoList, setTodo } = props;

  return (
    <div className={styles.inputlist_container}>
      {todoList.map((task) => {
        return (
          <SingleTodo
            task={task}
            setTodo={setTodo}
            setTodoList={setTodoList}
            todoList={todoList}
          />
        );
      })}
    </div>
  );
}

export default InputList;
