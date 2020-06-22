const person = {
	name: 'Josh',
	age: 24,
	location: {
		city: 'Asheville',
		temp: 65
	}
};

//Assigns value of property key to a constant with the same name.
//Can set default if there is no prop with key 'name'
const { name = 'Anonymous', age } = person;

//Can name const something other than key name in object.
//Use syntax shown below with city: myCity
const { city: myCity, temp } = person.location;

console.log(myCity, temp, name, age);

console.log('-------------------------');

const book = {
	title: 'The Terranauts',
	author: 'T.C. Boyle',
	publisher: {
		name: 'Bloomsbury Publishing'
	}
};

const { name: publisherName = 'Self Published' } = book.publisher;

console.log(publisherName);

console.log('-------------------------');

//Array Destructuring

const address = [ '94 Herron Avenue', 'Asheville', 'NC', 28806 ];

//Similar to object destructing, the corresponding variable names will be assigned to the corresponding idx of the array in the order they were typed.
//If you want to skip an index, keep the comma, don't put a variable name. If it's the last idx you don't even need to add a comma.
//below we skip street and zip.
//can set defaults just as with objects.
const [ , city, state ] = address;

console.log(`${city}, ${state}`);

console.log('-------------------------');

const item = [ 'iced coffee', '$2.00', '$2.50', '$2.75' ];

const [ menuItem, , mediumPrice ] = item;

console.log(`A medium ${menuItem} costs ${mediumPrice}`);
