import React, { useState } from "react";

import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import "./Expenses.css";

const Expenses = (props) => {
	const [filteredYear, setFilteredYear] = useState("2020");

	const filteredExpenses = props.items.filter((expense) => {
		return expense.date.getFullYear().toString() === filteredYear;
	});

	const filterChangeHandler = (selectedYear) => {
		setFilteredYear(selectedYear);
	};

	return (
		<div>
			<Card className="expenses">
				<ExpensesFilter
					selected={filteredYear}
					onChangeFilter={filterChangeHandler}
				/>
				{filteredExpenses.length === 0 ? (
					<div>No expenses found</div>
				) : (
					filteredExpenses.map((expense) => {
						return (
							<ExpenseItem
								key={expense.id}
								title={expense.title}
								amount={expense.amount}
								date={expense.date}
							></ExpenseItem>
						);
					})
				)}
			</Card>
		</div>
	);
};

export default Expenses;
