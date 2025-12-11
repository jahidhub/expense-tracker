export default function ExpenseItems({ item, onDelete }) {
  return (
    <div>
      <div className="expense-item">
        <span>{item.title}</span>
        <span>${item.amount}</span>
        <button onClick={() => onDelete(item.id)}>❌</button>
      </div>
    </div>
  );
}
