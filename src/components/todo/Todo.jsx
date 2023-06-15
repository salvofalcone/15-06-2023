import "./index.css";
import { useState } from "react";

const Todo = ({ data }) => {
  const [isDone, setisDone] = useState(data.completed);

  const onHandleToggle = () => {
    setisDone(!isDone);
  };

  return (
    <>
      <li
        key={data.id}
        className={` todo__li ${isDone ? "done" : ""}`}
        id={data.id}
        onClick={onHandleToggle}>
        {data.title}
      </li>
    </>
  );
};

export default Todo;
