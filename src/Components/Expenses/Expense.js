import React, { useState } from "react";
import ExpenseFilter from "./ExpenseFilter";
import "./Expense.css";
import Card from "../UI/Card";
import ExpenseList from "./ExpensesList";
import ExpenseChart from "./ExpenseChart";

export const Expense = (props) => {
  const [filteredYear, setfilteredYear] = useState("2020");
  const filterChangeHandler = (selectedYear) => {
    setfilteredYear(selectedYear);
  };

  //filtering the Full expense List according to selected year
  const filteredExpenses = props.expen.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter
          onChangedFilter={filterChangeHandler}
          setYear={filteredYear}
        />

        <ExpenseChart expenses={filteredExpenses} />
        {/* 1) methode => this is the ternary expression */}
        {/* {filteredExpenses.length === 0 ? (
          <p>No Expenses Found</p>
        ) : (
          filteredExpenses.map((exp) => {
            return <ExpenseItem expen={exp} key={exp.id} />;
          })
        )} */}

        {/* 2 Methode=> this shortcut to write the conditional statement in one line, if the condition is true then the statement after "&&" will */}

        {/* {filteredExpenses.length === 0 && <p>No Expenses Found</p>}
        {filteredExpenses.length > 0 &&
          filteredExpenses.map((exp) => {
            return <ExpenseItem expen={exp} key={exp.id} />;
          })} */}
        <ExpenseList items={filteredExpenses} />
      </Card>
    </div>
  );
};

export default Expense;
