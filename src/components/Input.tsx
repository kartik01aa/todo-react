import React, { FormEvent } from "react";
import styles from "../style/input.module.css";
import Todo from "../model";

type Props = {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  handleChange: (e: FormEvent) => void;
};

function Input(props: Props) {
  const { todo, setTodo, handleChange } = props;
  return (
    <>
      <h2 className={styles.heading}>TODO LIST</h2>
      <form className={styles.input_form} onSubmit={(e) => handleChange(e)}>
        <input
          value={todo}
          className={styles.input_input}
          onChange={(e) => setTodo(e.target.value)}
          placeholder="Enter the task"
        />
        <button className={styles.input_btn}>Go</button>
      </form>
    </>
  );
}

export default Input;
