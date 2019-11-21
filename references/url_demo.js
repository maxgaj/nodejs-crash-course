const url = require('url');

const myUrl = new URL('http://mywebsite.com:8000/hello.html?id=100&status=active');

// Serialized URL
console.log(myUrl.href);
console.log(myUrl.toString());

// Host
console.log(myUrl.host);
console.log(myUrl.hostname);

// PathName
console.log(myUrl.pathname);
// Serialized query
console.log(myUrl.search);
// Param object
console.log(myUrl.searchParams);
// Add param
myUrl.searchParams.append('abc', '123');
console.log(myUrl.searchParams);
// loop
myUrl.searchParams.forEach((value, name) => console.log(`${name}: ${value}`));

