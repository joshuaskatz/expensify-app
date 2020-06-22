// Higher Order Component (HOC) - A component (HOC) that renders another component(regular component). Allows us to/take advantage of:
//1) reuse code
//2) render hijacking
//3) prop manipulation
//4) abstract state

import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
	<div>
		<h1>Info</h1>
		<p>Here is the info: {props.info}</p>
	</div>
);

const withAdminWarning = (WrappedComponent) => {
	return (props) => (
		<div>
			{props.isAdmin && <p>This is private info, please don't share!</p>}
			{/*spreading props object passes key/value pairs into wrapped
            components as props*/}
			<WrappedComponent {...props} />
		</div>
	);
};

const requireAuthentication = (WrappedComponent) => {
	return (props) => (
		<div>
			{props.isAuthentication ? (
				<WrappedComponent {...props} />
			) : (
				<p>This is private info, please login to see info</p>
			)}
		</div>
	);
};

const AdminInfo = withAdminWarning(Info);
const AuthInfo = requireAuthentication(Info);

// ReactDOM.render(
// 	<AdminInfo info="private info" isAdmin={false} />,
// 	document.getElementById('app')
// );

ReactDOM.render(
	<AuthInfo info="private info" isAuthentication={true} />,
	document.getElementById('app')
);
