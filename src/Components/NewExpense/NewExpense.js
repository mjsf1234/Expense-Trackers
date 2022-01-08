import React, { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const ExpenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(ExpenseData);
  };

  const [visible, setvisible] = useState(false);

  const ShowExpenseForm = () => {
    setvisible(true);
  };
  const hideExpenseForm = () => {
    setvisible(false);
  };

  return (
    <div className="new-expense">
      {!visible && (
        <button visible="false" onClick={ShowExpenseForm}>
          Add New Expense
        </button>
      )}
      {visible && (
        <ExpenseForm
          onSaveExpenseDate={saveExpenseDataHandler}
          onCancel={hideExpenseForm}
        />
      )}
    </div>
  );
};

export default NewExpense;
