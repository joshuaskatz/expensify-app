import authReducer from '../../reducers/auth';

test('should clear uid for logout', () => {
	const action = {
		type: 'LOGIN'
	};
	const state = authReducer({ uid: '123abc' }, action);
	expect(state).toEqual({});
});

test('should set uid for login', () => {
	const action = {
		type: 'LOGIN',
		uid: 'abc123'
	};
	const state = authReducer({}, action);
	expect(state.uid).toEqual(action.uid);
});
