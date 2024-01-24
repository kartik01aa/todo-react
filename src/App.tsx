import React, { useState } from "react";
import styles from "./style/App.module.css";
import Input from "./components/Input";
import InputList from "./components/InputList";
import Todo from "./model";

function App() {
  const [todo, setTodo] = useState<string>("");
  const [todoList, setTodoList] = useState<Todo[]>([]);

  const handleChange = (e: React.FormEvent) => {
    e.preventDefault();
    if (todo) {
      setTodoList([
        ...todoList,
        { id: Date.now().toString(), todo, isDone: false },
      ]);
      setTodo("");
    }
  };

  return (
    <div className={styles.app}>
      <Input todo={todo} setTodo={setTodo} handleChange={handleChange} />
      <InputList
        todoList={todoList}
        setTodoList={setTodoList}
        setTodo={setTodo}
      />
    </div>
  );
}

export default App;
