import { useState } from "react";

import ExpenseForm from "./ExpenseForm";
import ExpenseList from "./ExpenseList";

export default function App() {
  const [expenses, setExpenses] = useState([]);


  return (
    <div className="container-wraper">
      <div className="app-container">
        <h1>💰 Expense Tracker</h1>
        <ExpenseForm  />
        <h3 className="total">Total Expense: $750.00</h3>
        <ExpenseList />
      </div>
    </div>
  );
}
