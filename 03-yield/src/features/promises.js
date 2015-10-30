export function es5(cb) {
  setTimeout(function() {
    cb(null, 10)
  }, 1)
}

export function es6() {
	const promise = new promise((resolve, reject) => {
		setTimeout(function() {
			resolve()
		})
	})
	return promise;
}
