import React from "react";
import "./NewTodoTask.css";
import { useState } from "react";

function NewTodoTask(props) {
  const [task, setTask] = useState("");
  const [amount, setAmount] =useState("");
  const [date, setDate] = useState("");
  const [category, setCategory] = useState("");
  const [payment, setPayment] = useState("");

  const taskHandler = (event) => {
    setTask(event.target.value);
  };
  const amountHandler = (event) => {
    setAmount(event.target.value);
  };

  const dueDateHandler = (event) => {
    setDate(event.target.value);
  };

  const categoryHandler = (event) => {
    setCategory(event.target.value);
  }

  const paymentHandler = (event) => {
    setPayment(event.target.value);
  }
  const clickHanlder = () => {
    const newTodo = {
        category:category,
        task: task,
        amount:amount,
        payment:payment,
        dueDate: new Date(date),
    }


    props.addNewTodo(newTodo)
    props.setIsShow(false)

    setTask("")
    setAmount("")
    setDate("")
    setCategory("")
    setPayment("")
  }

  return (
    <div className="add-container">
      <div className="input-container">
          <label>Category</label>
          <select  onChange={categoryHandler} value={category}  className="from-select">
              <option>FOOD</option>
              <option>DRING</option>
              </select>

              <label>Payment</label>
          <select  onChange={paymentHandler} value={payment}  className="from-select">
              <option>CASH</option>
              <option>Credit Card</option>
              </select>

        <div>
          <label>รายการ</label>
          <input type="text"  value={task} onChange={taskHandler} />
        </div>
        <div>
          <label>Amount</label>
          <input value={amount} onChange={amountHandler} type="number" min="0" max="1000000" step="100"  />
        </div>

        <div>
          <label>Due Date</label>
          <input type="date" value={date} onChange={dueDateHandler} />
        </div>
      </div>
      <div className="add-button">
        <button onClick={clickHanlder}>Add</button>
      </div>

      <div className="add-button">
        <button onClick={() => props.setIsShow(false)}>Cancel</button>
      </div>

    </div>
  );
}

export default NewTodoTask;
