import React from 'react';
import numeral from 'numeral';
import { connect } from 'react-redux';

import getVisibleExpenses from '../selectors/expenses';
import selectExpenseTotal from '../selectors/expenses-total';

export const ExpensesSummary = ({ expenseCount, expensesTotal }) => {
	const expenseWord = expenseCount !== 1 ? 'expenses' : 'expense';
	const formattedExpenseTotal = numeral(expensesTotal / 100).format(
		'$0,0.00'
	);
	return (
		<div>
			<h1>
				Viewing {expenseCount} {expenseWord} totalling{' '}
				{formattedExpenseTotal}
			</h1>
		</div>
	);
};

const mapStateToProps = (state) => {
	const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);

	return {
		expenseCount: visibleExpenses.length,
		expensesTotal: selectExpenseTotal(visibleExpenses)
	};
};

export default connect(mapStateToProps)(ExpensesSummary);
