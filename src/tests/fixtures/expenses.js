import moment from 'moment';

export default [
	{
		id: '1',
		description: 'coffee',
		note: '',
		amount: 195,
		createdAt: 0
	},
	{
		id: '2',
		description: 'credit card',
		note: '',
		amount: 350000,
		createdAt: moment(0).subtract(4, 'days').valueOf()
	},
	{
		id: '3',
		description: 'rent',
		note: '',
		amount: 50000,
		createdAt: moment(0).add(4, 'days').valueOf()
	}
];
