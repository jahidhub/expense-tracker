import React from "react";
import ExpenseItems from "./ExpenseItems";

function ExpenseList({ expenses, onDelete }) {

  // console.log(expenses);
  if (expenses.length === 0) {
    return <p className="no-expense">No Expenses Found</p>;
  }
  return (
    <div>
      <div className="expense-list">
        {expenses.map((item) => (
          <ExpenseItems item={item} key={item.id} onDelete={onDelete} />
        ))}
      </div>
    </div>
  );
}

export default ExpenseList;
