import React from "react";
import ExpenseItems from "./ExpenseItems";

function ExpenseList() {
  return (
    <div>
      <div className="expense-list">
        <ExpenseItems/>
      </div>
    </div>
  );
}

export default ExpenseList;
