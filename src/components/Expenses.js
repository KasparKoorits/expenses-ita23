import "./Expenses.css";
import ExpenseItem from "./ExpenseItem.js";

const Expenses = (props) => {
  return (
    <div className="expenses">
      <ExpenseItem data={props.data[0]} />
      <ExpenseItem data={props.data[1]} />
    </div>
  );
};

export default Expenses;
