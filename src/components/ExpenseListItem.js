import React from 'react';
import { connect } from 'react-redux';

import { Link } from 'react-router-dom';

export const ExpenseListItem = ({ id, description, amount, createdAt }) => (
	<div>
		<Link to={`/edit/${id}`}>
			<h3>{description}</h3>
		</Link>
		<p>
			Amount: {amount} - Created at: {createdAt}
		</p>
	</div>
);

const mapStateToProps = (state) => ({
	expenses: state.expenses
});

export default connect(mapStateToProps)(ExpenseListItem);
