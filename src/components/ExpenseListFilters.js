import React from 'react';
import { connect } from 'react-redux';
import {
	setTextFilter,
	sortByDate,
	sortByAmount,
	setStartDate,
	setEndDate
} from '../actions/filters';
import { DateRangePicker } from 'react-dates';
import 'react-dates/initialize';

export class ExpenseListFilters extends React.Component {
	state = {
		calenderFocused: null
	};
	onDatesChange = ({ startDate, endDate }) => {
		this.props.setStartDate(startDate);
		this.props.setEndDate(endDate);
	};
	onFocusChange = (calenderFocused) => {
		this.setState(() => ({ calenderFocused }));
	};
	onTextChange = (e) => {
		this.props.setTextFilter(e.target.value);
	};
	onSortChange = (e) => {
		if (e.target.value === 'date') {
			this.props.sortByDate();
		} else if (e.target.value === 'amount') {
			this.props.sortByAmount();
		}
		console.log(e.target.value);
	};
	render() {
		return (
			<div>
				<input type="text" onChange={this.onTextChange} />
				<select onChange={this.onSortChange}>
					<option value="date">Date</option>
					<option value="amount">Amount</option>
				</select>
				<DateRangePicker
					id="date-range-picker"
					startDate={this.props.filters.startDate}
					startDateId="expensify-start-date"
					endDate={this.props.filters.endDate}
					endDateId="expensify-end-date"
					onDatesChange={this.onDatesChange}
					focusedInput={this.state.calenderFocused}
					onFocusChange={this.onFocusChange}
					showClearDates={true}
					numberOfMonths={1}
					isOutsideRange={() => false}
				/>
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
	filters: state.filters
});

const mapDispatchToProps = (dispatch) => ({
	sortByAmount: () => dispatch(sortByAmount()),
	sortByDate: () => dispatch(sortByDate()),
	setTextFilter: (text) => dispatch(setTextFilter(text)),
	setStartDate: (startDate) => dispatch(setStartDate(startDate)),
	setEndDate: (endDate) => dispatch(setEndDate(endDate))
});

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseListFilters);
