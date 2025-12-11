import { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import ExpenseList from "./ExpenseList";

export default function App() {
  const [expenses, setExpenses] = useState([]);

  const addExpenses = (expense) => {
    setExpenses((prev) => [...prev, expense]);
  };

  const deleteExpenses = (id) => {};

  return (
    <div className="container-wraper">
      <div className="app-container">
        <h1>💰 Expense Tracker</h1>
        <ExpenseForm onAddExpense={addExpenses} />
        <h3 className="total">Total Expense: $750.00</h3>
        <ExpenseList expenses={expenses} onDelete={deleteExpenses} />
      </div>
     
    </div>
  );
}
