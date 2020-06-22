//can't import moment, so we mock it by requiring it this way.
//read the jest docs for more
const moment = jest.requireActual('moment');

export default (timestamp = 0) => {
	return moment(timestamp);
};
