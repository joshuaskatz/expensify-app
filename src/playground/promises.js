const promise = new Promise((resolve, reject) => {
	setTimeout(() => {
		// resolve({
		// 	name: 'josh',
		// 	age: 24
		// });
		reject('something went wrong');
	}, 5000);
});
//fires first
console.log('before');
//fires third
promise
	.then((result) => {
		console.log(result.name);
	})
	.catch((err) => {
		console.log('Error: ', err);
	});
//fires second
console.log('after');
