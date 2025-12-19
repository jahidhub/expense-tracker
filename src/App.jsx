import { useEffect, useState } from "react";
import ExpenseForm from "./ExpenseForm";
import ExpenseList from "./ExpenseList";

export default function App() {
  const [expenses, setExpenses] = useState(() => {
    const saveItems = localStorage.getItem("expenses");
    return saveItems !== null ? JSON.parse(saveItems) : [];
  });

  useEffect(() => {
    localStorage.setItem("expenses", JSON.stringify(expenses));
  }, [expenses]);

  const addExpenses = (expense) => {
    setExpenses((prev) => [...prev, expense]);
  };

  const deleteExpenses = (id) => {
    setExpenses((prev) =>
      prev.filter((item) => {
        return item.id != id;
      })
    );
  };

  const totalExpenses = expenses.reduce((sum, item) => sum + item.amount, 0);

  return (
    <div className="container-wraper">
      <div className="app-container">
        <h1>💰 Expense Tracker</h1>
        <ExpenseForm onAddExpense={addExpenses} />
        <h3 className="total">
          Total Expense: ৳ {totalExpenses.toFixed(2)}
        </h3>
        <ExpenseList expenses={expenses} onDelete={deleteExpenses} />
      </div>
    </div>
  );
}
