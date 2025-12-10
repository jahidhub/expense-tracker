function ExpenseForm({ onAddExpense }) {


  return (
    <div>
      <form className="expense-form">
        <input placeholder="Expense Title" type="text" value="" />
        <input placeholder="Amount $" type="number" value="" />
        <button type="submit">Add Expense</button>
      </form>
    </div>
  );
}

export default ExpenseForm;
