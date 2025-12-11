import { useState, useRef } from "react";

function ExpenseForm({ onAddExpense }) {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState(0);
  const titleRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title || !amount) return alert("Please Fill All Fields!");

    const newEXpenseObj = {
      id: Date.now(),
      title: title,
      amount: parseFloat(amount),
    };

    onAddExpense(newEXpenseObj);
    setTitle("");
    setAmount("");
    titleRef.current.focus();
  };

  return (
    <div>
      <form className="expense-form" onSubmit={handleSubmit}>
        <input
          placeholder="Expense Title"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          ref={titleRef}
        />
        <input
          placeholder="Amount $"
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <button type="submit">Add Expense</button>
      </form>
    </div>
  );
}

export default ExpenseForm;
