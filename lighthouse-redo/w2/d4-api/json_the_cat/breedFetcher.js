const request = require("request");
const arg = process.argv.slice(2);

request(
	`https://api.thecatapi.com/v1/breeds/search?q=${arg[0]}`,
	(error, response, body) => {
		if (error) {
			console.log("Unable to access URL.  Please check path and try again");
			return;
		}
		const data = JSON.parse(body);
		if (data.length === 0) {
			console.log("Unable to find cat breed");
			return;
		}
		console.log("body:", data[0].description);
	}
);
