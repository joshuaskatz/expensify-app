import filtersReducer from '../../reducers/filters';
import moment from 'moment';

test('should setup default filter values', () => {
	const state = filtersReducer(undefined, { type: '@@INIT' });
	expect(state).toEqual({
		text: '',
		sortBy: 'date',
		startDate: moment().startOf('month'),
		endDate: moment().endOf('month')
	});
});

test('should set sort by to amount', () => {
	const state = filtersReducer(undefined, { type: 'SORT_BY_AMOUNT' });
	expect(state.sortBy).toBe('amount');
});

test('should set sort by to amount', () => {
	const currentState = {
		text: '',
		sortBy: 'amount',
		startDate: undefined,
		endDate: undefined
	};
	const action = { type: 'SORT_BY_DATE' };
	const state = filtersReducer(currentState, action);
	expect(state.sortBy).toBe('date');
});

test('should set text filter', () => {
	const text = 'text';
	const state = filtersReducer(undefined, {
		type: 'SET_TEXT_FILTER',
		text
	});
	expect(state.text).toBe('text');
});

test('should set startDate filter', () => {
	const state = filtersReducer(undefined, {
		type: 'SET_START_DATE',
		startDate: moment(0)
	});
	expect(state.startDate).toEqual(moment(0));
});

test('should set endDate filter', () => {
	const state = filtersReducer(undefined, {
		type: 'SET_END_DATE',
		endDate: moment(1000)
	});
	expect(state.endDate).toEqual(moment(1000));
});
