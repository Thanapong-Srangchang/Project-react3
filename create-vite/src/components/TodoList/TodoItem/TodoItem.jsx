import React, { useState } from "react";
import "./TodoItem.css";

function TodoItem(props) {
  const [checkbox, setCheckbox] = useState(props.isFinished);
  const [isEdit, setIsEdit] = useState(false);
  const [curTask, setCurTask] = useState("");
  const [curDate, setCurDate] = useState();
  const [amount, setAmount] = useState(props.amount || "");
  const [payment, setPayment] = useState("");

  const [category, setSelectedCategory] = useState("");
  const task = props.task;
  // const amount =props.amount;
  const dueDate = props.dueDate;
  const date = dueDate.getDate();
  const month = dueDate.getMonth();
  const year = dueDate.getFullYear();
  

  const resolveDueDate = (date, month, year) => {
    let convertedDate, convertedMonth;

    if(String(date).length === 1 ) {
      convertedDate = "0" + date;
    } else {
      convertedDate = date;
    }

    if(String(month).length === 1 ) {
      convertedMonth = "0" + month;
    }else {
      convertedMonth = month;
    }
    return`${year}-${convertedMonth}-${convertedDate}` ;
  };

  const onClickEdit = () => {
    setIsEdit(true);
    setSelectedCategory(props.category);
    setCurTask(props.task);
    setAmount(props.amount);
    const dateToSet = resolveDueDate(date, month, year);
    setCurDate(dateToSet);
    setPayment(props.payment);

    
    
  };

  const onClickDone =() =>{
    const editValues = {
      id: props.id,
      category:category,
      task:curTask,
      amount: amount,
      payment: payment,
      dueDate: new Date(curDate),
      isFinished: checkbox,
      
      

    }
    setIsEdit(false);
    props.editHandler(props.id, editValues );
  }

  if (isEdit) {
    return (
      <div className="from-control">
        <div className="cb-container">
        <input 
        checked={checkbox} 
        onChange={(e) => setCheckbox(e.target.checked)} 
        type="checkbox" 
        />
      </div>
      <div  className="ta-container">
        <select value={category} 
        onChange={e => setSelectedCategory(e.target.value)} >           
            <option>FOOD</option>
            <option>DRING</option>
        </select>
      </div>

      <div  className="te-container">
        <select value={payment} 
        onChange={e => setPayment(e.target.value)} >
            <option>CASH</option>
            <option>Credit Card</option>
        </select>
        
        
      </div>

      <div  className="tb-container">
        <input value={curTask} 
        onChange={e => setCurTask(e.target.value)} 
        />
      </div>
      <div  className="td-container">
        <input value={amount} 
        onChange={e => setAmount(e.target.value)} type="number" min="0" max="1000000" step="100" 
        />
      </div>
      <div className="dd-container">
      <input 
      value={curDate} 
      onChange={e => setCurDate(e.target.value)} 
      type="date"  
      />
      </div>
      <div className="ed-container">
        <button onClick={onClickDone}>Done</button>
      </div>
      <div className="dl-container">
        <button onClick={() => setIsEdit(false)} >Cancel</button>
      </div>
    </div>
  )}


  return (
    <div className="form-control">
      <div className="cb-container">
        <input checked={checkbox} onChange={(e) => setCheckbox(e.target.checked)} type="checkbox" />
      </div>
      <div className="ta-container">
        <select>
        {category}
        <option>FOOD</option>
        <option>DRING</option>
        </select>
        {category}</div>

        <div className="te-container">
        <select>
        {payment}
        <option>CASH</option>
        <option>Credit Card</option>
        </select>
        {payment}</div>
      <div  className="tb-container">{task}</div>
      <div  className="td-container">{amount}</div>
      <div className="dd-container">
        {date}/{month}/{year}
      </div>
      <div className="ed-container">
        <button onClick={onClickEdit}>Edit</button>
      </div>
      <div className="dl-container">
        <button onClick={() => props.deleteHandler(props.id)}>Delete</button>
      </div>
    </div>
  );
}

export default TodoItem;
