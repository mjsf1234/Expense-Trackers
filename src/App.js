import "./App.css";
import React, { useState } from "react";
import Expense from "./Components/Expenses/Expense";
import NewExpense from "./Components/NewExpense/NewExpense";

//Dummy data
const InitialExpenses = [];

//   {
//     id: "e1",
//     title: "Toilet Paper",
//     amount: 94.12,
//     date: new Date(2020, 7, 14),
//   },
//   { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
//   {
//     id: "e3",
//     title: "Car Insurance",
//     amount: 294.67,
//     date: new Date(2021, 2, 28),
//   },
//   {
//     id: "e4",
//     title: "New Desk (Wooden)",
//     amount: 450,
//     date: new Date(2021, 5, 12),
//   },
// ];

//main
function App() {
  //Actuale JSX working using the react
  // return react.createElement(
  //   "div",
  //   {},
  //   react.createElement("h2", {}, "hello"),
  //   react.createElement(Expense, {}, {})
  // );
  const [expenses, setExpenses] = useState(InitialExpenses);
  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
    console.log("app");
    console.log(expense);
  };

  return (
    <div className="App">
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expense expen={expenses} />
    </div>
  );
}

export default App;
