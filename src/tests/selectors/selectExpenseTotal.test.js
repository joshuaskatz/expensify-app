import React from 'react';
import selectExpenseTotal from '../../selectors/expenses-total';
import expenses from '../fixtures/expenses';

test('should return 0 if no expenses', () => {
	const expenses = [];
	const result = selectExpenseTotal(expenses);
	expect(result).toBe(0);
});

test('should correctly return a single expense', () => {
	const expenseArr = [ expenses[0] ];
	const result = selectExpenseTotal(expenseArr);
	expect(result).toBe(expenses[0].amount);
});

test('should correctly return multiple expenses', () => {
	const result = selectExpenseTotal(expenses);
	expect(result).toBe(400195);
});
