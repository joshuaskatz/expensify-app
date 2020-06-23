const selectExpenseTotal = (expenses) =>
	expenses.reduce((tot, { amount }) => tot + amount, 0);

export default selectExpenseTotal;
