import React from "react";
import TodoItem from "./TodoItem/TodoItem";
import "./TodoList.css";

function TodoList(props) {
    const todoList = props.todoList;
    const currenYear = props.currenYear;
    const filteredTodos = todoList.filter(
      (t) => t.dueDate.getFullYear() === Number(currenYear));

    return (
    <div className="tdl-container">
      {filteredTodos.map((e) => (
        <TodoItem
        editHandler={props.editHandler}
        deleteHandler={props.deleteHandler}
        id={e.id}
        key={e.id}
        category={e.category}
        task={e.task}
        amount={e.amount}
        payment={e.payment}
        isFinished={e.isFinished}
        dueDate={e.dueDate}
      />))}
      
    </div>
  );
}

export default TodoList;
