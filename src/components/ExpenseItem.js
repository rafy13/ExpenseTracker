import "./ExpenseItem.css";

function ExpenseItem() {
	const date = new Date();
	const expenseTitle = "Insurance";
	const expenseAmount = "1000.00";

	return (
		<div className="expense-item">
			<div>{date.toDateString()}</div>
			<div className="expense-item__description">
				<h2>{expenseTitle}</h2>
				<div className="expense-item__price">${expenseTitle}</div>
			</div>
		</div>
	);
}

export default ExpenseItem;
