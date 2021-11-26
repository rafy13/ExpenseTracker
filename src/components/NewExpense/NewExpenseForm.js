import React, { useState } from "react";
import "./NewExpenseForm.css";

const NewExpenseForm = (props) => {
	const [enteredTitle, setEnteredTitle] = useState("");
	const [enteredDate, setEnteredDate] = useState("");
	const [enteredAmount, setEnteredAmount] = useState("");

	const { onSaveExpenseData } = props;

	const titleChangeHandler = (event) => {
		setEnteredTitle(event.target.value);
	};

	const dateChangeHandler = (event) => {
		setEnteredDate(event.target.value);
	};

	const amountChangeHandler = (event) => {
		setEnteredAmount(event.target.value);
	};

	const submitHandler = (event) => {
		event.preventDefault();
		const expenseData = {
			title: enteredTitle,
			date: new Date(enteredDate),
			amount: enteredAmount,
		};
		onSaveExpenseData(expenseData);
		setEnteredTitle("");
		setEnteredDate("");
		setEnteredAmount("");
	};

	return (
		<form onSubmit={submitHandler}>
			<div className="new-expense__controls">
				<div className="new-expense__control">
					<label>Title</label>
					<input
						type="text"
						value={enteredTitle}
						onChange={titleChangeHandler}
					/>
				</div>
				<div className="new-expense__control">
					<label>Amount</label>
					<input
						type="number"
						min="0.01"
						step="0.01"
						value={enteredAmount}
						onChange={amountChangeHandler}
					/>
				</div>
				<div className="new-expense__control">
					<label>Date</label>
					<input
						type="date"
						min="2019/01/01"
						max="2022/12/31"
						value={enteredDate}
						onChange={dateChangeHandler}
					/>
				</div>
			</div>
			<div className="new_expanse__controls">
				<button type="sumbit">Add Expense</button>
			</div>
		</form>
	);
};

export default NewExpenseForm;
