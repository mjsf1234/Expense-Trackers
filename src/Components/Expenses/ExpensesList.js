import "./ExpensesList.css";
import ExpenseItem from "./ExpenseItem";

const ExpenseList = (props) => {
  //defining the var for expense content and setting the default values

  if (props.items.length === 0) {
    return <h2 className="expenses-list__fallback"> No Expense Found</h2>;
  }
  return (
    <ul className="expenses-list">
      {props.items.map((exp) => {
        return <ExpenseItem expen={exp} key={exp.id} />;
      })}
    </ul>
  );
};

export default ExpenseList;
