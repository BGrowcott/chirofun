// const { google } = require("googleapis");
// const path = require("path");
// const key = require("../../utils/key.json");
// const dotenv = require("dotenv");

// // Load the service account key file
// const KEYFILEPATH = path.join(__dirname, "../../utils/serv-key.json");
// const SCOPES = ["https://www.googleapis.com/auth/business.manage"];

module.exports = {
	getReviews: async function () {
		// Authenticate using the service account
		// const auth = new google.auth.GoogleAuth({
		// 	keyFile: KEYFILEPATH,
		// 	scopes: SCOPES,
		// });

		// // Initialize Google My Business API
		// //const mybusiness = google.mybusiness({ version: 'v4', auth });
		// const mybusiness = await google.discoverAPI("https://developers.google.com/my-business/samples/mybusiness_google_rest_v4p9.json", { auth });

		// try {
		// 	// Replace with your own business account name
		// 	const accountName = `accounts/${key.web.client_id}`;
		// 	const locationName = `${accountName}/locations/${process.env.LOCATION_ID}`;

		// 	// Fetch the reviews
		// 	const res = await mybusiness.accounts.locations.reviews.list({
		// 		parent: locationName,
		// 	});

		// 	// Output the reviews
		// 	console.log("Reviews:", res.data.reviews);
		// } catch (error) {
		// 	console.error("Error retrieving reviews:", error);
		// }
	},
};
