import ExpenseItem from "./components/ExpenseItem";

function App() {
	return (
		<div>
			<h2>Let's get started!</h2>
			<ExpenseItem
				date={new Date()}
				title={"Insurance"}
				amount={100.0}
			></ExpenseItem>
		</div>
	);
}

export default App;
