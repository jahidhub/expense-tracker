import React from "react";

function ExpenseList() {
  return (
    <div>
      <div className="expense-list">
        <div className="expense-item">
          <span>Internet Charges </span>
          <span>$500</span>
          <button>❌</button>
        </div>
        <div className="expense-item">
          <span>Train Ticket</span>
          <span>$250</span>
          <button>❌</button>
        </div>
      </div>
    </div>
  );
}

export default ExpenseList;
