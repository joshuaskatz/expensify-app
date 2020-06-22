import { createStore } from 'redux';

//Action generator: function that returns action objects.
//Can pass in custom actions as objects. See store.dispatch() below.
const incrementCount = ({ incrementBy = 1 } = {}) => ({
	type: 'INCREMENT',
	incrementBy
});

//Destructure the argument passed into the store.dispatch() (decrementBy: 5), if it doesn't exist, then decrement is 1 by default. store.dispatch() expects an object with parameters, so if we don't set the default of the destructured object to an empty object (equivalent of not passing in any parameters) we'll get an error. This is equivalent to running store.dispatch({}), just saying no extra parameters.
const decrementCount = ({ decrementBy = 1 } = {}) => ({
	type: 'DECREMENT',
	decrementBy
});

const resetCount = () => ({
	type: 'RESET'
});

const setCount = ({ count = 100 } = {}) => ({
	type: 'SET',
	count
});

//Reducer
// 1) reducers are pure functins (output depends on input of the function)
// 2) never change state or action
const reducer = (state = { count: 0 }, action) => {
	switch (action.type) {
		case 'INCREMENT':
			return {
				count: state.count + action.incrementBy
			};
		case 'DECREMENT':
			return {
				count: state.count - action.decrementBy
			};
		case 'RESET':
			return {
				count: 0
			};
		case 'SET':
			return {
				count: action.count
			};
		default:
			return state;
	}
};

const store = createStore(reducer);

//store.subscirbe() watches store for changes. Takes a function as an arg.
//when we call unsubscribe() we will stop watching for changes.
const unsubscribe = store.subscribe(() => console.log(store.getState()));

//Actions: an object that gets sent to the store, describing what we want to do to the state. Dispatch action/type to createStore() and passes it in as the 2nd arg. Use 'switch' to handle what action does, depending on its type.

store.dispatch(incrementCount({ incrementBy: 5 }));

store.dispatch(incrementCount());

//unsubscribe()

store.dispatch(resetCount());

store.dispatch(decrementCount({ decrementBy: 5 }));

store.dispatch(setCount({ count: 101 }));
