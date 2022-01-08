import React from "react";
import "./ExpenseForm.css";
import { useState } from "react";

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState(" ");
  const [enteredAmount, setEnteredAmount] = useState(" ");
  const [enteredDate, setEnteredDate] = useState(" ");

  //   const [userInput, setUserInput] = useState({
  //     enteredTitle: "",
  //     setEnteredAmount: "",
  //     setEnteredDate: "",
  //   });

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);

    // setUserInput((prevState) => {
    //   return {
    //     ...prevState,
    //     enteredTitle: event.target.value,
    //   };
    // });
  };

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
    // setUserInput((prevState) => {
    //   return {
    //     ...prevState,
    //     setEnteredAmount: event.target.value,
    //   };
    // });
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);

    // setUserInput((prevState) => {
    //   return {
    //     ...prevState,
    //     setEnteredDate: event.target.value,
    //   };
    // });
  };
  const submitHandler = (event) => {
    event.preventDefault();
    const ExpenseData = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate),
    };

    props.onSaveExpenseDate(ExpenseData);

    setEnteredDate("");
    setEnteredTitle("");
    setEnteredAmount("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            onChange={titleChangeHandler}
            value={enteredTitle}
          />
        </div>

        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enteredAmount}
            onChange={amountChangeHandler}
          />
        </div>

        <div className="new-expense__control">
          <label>Date</label>
          <input
            value={enteredDate}
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            onChange={dateChangeHandler}
          />
        </div>
      </div>

      <button
        type="button"
        className="new-expense__actions "
        onClick={props.onCancel}
      >
        Cancel
      </button>
      <button type="submit" className="new-expense__actions ">
        Add Expense
      </button>
    </form>
  );
};

export default ExpenseForm;
