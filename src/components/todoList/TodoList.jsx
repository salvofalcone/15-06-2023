import "./index.css";
import Todo from "../todo/Todo";
import { useState } from "react";
import { todoList } from "../../mocks/todos";

const TodoList = ({ filterNumb }) => {
  const [filterTodo, setFilterTodo] = useState(todoList);
  const onHandleFilter = (maxNumb) => {
    setFilterTodo(filterTodo.filter((todo) => todo.title.length <= maxNumb));
  };

  return (
    <div className="todo__list">
      <div className="btn__style">
        <button
          onClick={() => onHandleFilter(filterNumb)}
          className="filter__btn">
          Filtra {filterNumb}
        </button>
      </div>
      <ul className="todo__ul">
        {filterTodo.map((todo) => (
          <Todo data={todo} key={todo.id} />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
