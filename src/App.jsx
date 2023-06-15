import "./App.css";
import Title from "./components/title";
import TodoList from "./components/todoList/TodoList";

function App() {
  return (
    <div className="App">
      <Title />
      <div className="todo__container">
        <TodoList filterNumb={16} />
        <TodoList filterNumb={26} />
        <TodoList filterNumb={36} />
      </div>
    </div>
  );
}

export default App;
