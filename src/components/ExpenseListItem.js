import React from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import numeral from 'numeral';

import { Link } from 'react-router-dom';

export const ExpenseListItem = ({ id, description, amount, createdAt }) => (
	<div>
		<Link to={`/edit/${id}`}>
			<h3>{description}</h3>
		</Link>
		<p>
			{numeral(amount / 100).format('$0,0.00')}
			-
			{moment(createdAt).format('MMMM Do, YYYY')}
		</p>
	</div>
);

const mapStateToProps = (state) => ({
	expenses: state.expenses
});

export default connect(mapStateToProps)(ExpenseListItem);
