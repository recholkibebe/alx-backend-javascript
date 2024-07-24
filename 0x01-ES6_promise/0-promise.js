Function getResponseFromAPI(){
	const promise = Promise.reject(5);
	return promise;
}
const response = getResponseFromAPI();
console.log(response instanceof promise);
