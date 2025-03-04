import { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import NewTodoTask from "./components/NewTodoTask/NewTodoTask";
import TodoList from "./components/TodoList/TodoList";

let count = 4;

function uniqueId() {
  count = count + 1;
  return count;
}

const INITAL_TODOS = [
  {
    id: 1,
    category: "Food",
    task: "HAAM",
    amount: "100$",
    payment:  ("CASH", "Credit Card"),
    dueDate: new Date("2024-02-28"),
    isFinished: false,
  },
  {
    id: 2,
    category: "DRING",
    task: "BEER",
    amount: "200$",
    payment: ("CASH", "Credit Card"),
    dueDate: new Date("2024-06-14"),
    isFinished: true,
  },
  {
    id: 3,
    category: "Food",
    task: "PIZZA",
    amount: "300$",
    payment:  ("CASH", "Credit Card"),
    dueDate: new Date("2024-05-20"),
    isFinished: true,
  },
  {
    id: 4,
    category: "DRING",
    task: "WARTER",
    amount: "400$",
    payment:  ("CASH", "Credit Card"),
    dueDate: new Date("2024-07-26"),
    isFinished: true,
  },
];

function App() {
 
  const [todoList, setTodoList] = useState(INITAL_TODOS);
  const [curYear, setCurYear] = useState("2024");
  const [isShow, setIsShow] = useState(false);
  

  const addNewTodo = (newTodo) => {
    const newTodoItem = {
      ...newTodo,
      id: uniqueId(),
    }
    setTodoList([...todoList, newTodoItem])
  };

  const deleteHandler = (id) => {
    const newTodoList = todoList.filter ((e) => e.id !== id)
    setTodoList(newTodoList);
  };

  const editHandler = (id, todo) => {
    const newTodoList = [...todoList];

    const index = todoList.findIndex(e => e.id === id);
    newTodoList[index] = { ...todo};

    setTodoList(newTodoList);
  }

  return (
    <div className="App">
      <Header value={curYear} onChange={(e) => setCurYear(e.target.value)} />
      {isShow? (
        <NewTodoTask setIsShow={setIsShow} addNewTodo={addNewTodo}/> 
      ): (
      <div style={{margin: "10px"}}>
          <button onClick={() => setIsShow(true)}>Add new </button>
        </div>
        )}
      <TodoList
      editHandler={editHandler}
      deleteHandler={deleteHandler} currenYear={curYear}  todoList={todoList} />
    </div>
  );
}

export default App;
