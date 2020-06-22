import { createStore, combineReducers } from 'redux';
import { v4 as uuid4 } from 'uuid';

//store creation

const store = createStore(
	combineReducers({
		expenses: expensesReducer,
		filters: filterReducer
	})
);

store.subscribe(() => {
	const state = store.getState();
	const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
	console.log(visibleExpenses);
});

const expenseOne = store.dispatch(
	addExpense({
		description: 'Rent',
		amount: 54500,
		createdAt: 0
	})
);

const expenseTwo = store.dispatch(
	addExpense({
		description: 'coffee',
		amount: 300,
		createdAt: 0
	})
);

// store.dispatch(removeExpense({ id: expenseOne.expense.id }));
// store.dispatch(editExpense(expenseTwo.expense.id, { amount: 250 }));

// store.dispatch(setTextFilter('coffee'));

store.dispatch(sortByAmount());
// store.dispatch(sortByDate());
// store.dispatch(setStartDate(125));
// store.dispatch(setStartDate());
// store.dispatch(setEndDate(999));
