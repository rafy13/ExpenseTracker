import "./NewExpense.css";
import NewExpenseForm from "./NewExpenseForm";

const NewExpense = (props) => {
	const { onAddExpense } = props;
	const onSaveExpenseDataHandler = (enteredExpenseData) => {
		const expenseData = {
			...enteredExpenseData,
			id: Math.random().toString(),
		};
		onAddExpense(expenseData);
	};

	return (
		<div className="new-expense">
			<NewExpenseForm onSaveExpenseData={onSaveExpenseDataHandler} />
		</div>
	);
};

export default NewExpense;
