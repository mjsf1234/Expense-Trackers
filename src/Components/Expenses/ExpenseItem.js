import "./ExpenseItem.css";

import { ExpenseDate } from "./ExpenseDate";
import Card from "../UI/Card";

export function ExpenseItem(props) {
  return (
    <ul>
      <Card className="expense-item">
        <ExpenseDate expDate={props.expen.date} />
        <div className="expense-item__description">
          <h2>{props.expen.title}</h2>
          <div className="expense-item__price">{"$" + props.expen.amount}</div>
        </div>

        {/* <button onClick={clickHandler()}>Click Me </button>  Code execute when the page is rendered not when button is clicked, but above code will run when button is clicked*/}
      </Card>
    </ul>
  );
}

export default ExpenseItem;
