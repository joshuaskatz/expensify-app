import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';

test('should set default state', () => {
	const state = expensesReducer(undefined, { type: '@@INIT' });
	expect(state).toEqual([]);
});

test('should remove expense by id', () => {
	const state = expensesReducer(expenses, {
		type: 'REMOVE_EXPENSE',
		id: expenses[0].id
	});
	expect(state).toEqual([ expenses[1], expenses[2] ]);
});

test('should not remove expense if id not found', () => {
	const state = expensesReducer(expenses, {
		type: 'REMOVE_EXPENSE',
		id: '-1'
	});
	expect(state).toEqual(expenses);
});

test('should add expense', () => {
	const expense = {
		id: 4,
		description: 'some text',
		note: 'some note',
		amount: 100,
		createdAt: 0
	};
	const state = expensesReducer(expenses, {
		type: 'ADD_EXPENSE',
		expense
	});
	expect(state).toEqual([ ...expenses, expense ]);
});

test('should edit expense by id', () => {
	const state = expensesReducer(expenses, {
		type: 'EDIT_EXPENSE',
		id: expenses[1].id,
		updates: { description: 'different text' }
	});
	expect(state[1].description).toBe('different text');
});

test('should not edit if id not found', () => {
	const state = expensesReducer(expenses, {
		type: 'EDIT_EXPENSE',
		id: '-1',
		updates: {
			description: 'different text'
		}
	});
	expect(state).toEqual(expenses);
});

test('should set expenses', () => {
	const state = expensesReducer(expenses, {
		type: 'SET_EXPENSES',
		expenses: [ expenses[1] ]
	});
	expect(state).toEqual([ expenses[1] ]);
});

test('');
