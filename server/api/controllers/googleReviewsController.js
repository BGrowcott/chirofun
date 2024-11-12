const { google } = require("googleapis");
const path = require("path");
const key = require("../../utils/key.json");
const dotenv = require("dotenv");
const axios = require('axios');

// Load the service account key file
const KEYFILEPATH = path.join(__dirname, "../../utils/serv-key.json");
const SCOPES = ["https://www.googleapis.com/auth/business.manage"];

module.exports = {
	getReviews: async function (req, res) {		
		try {
			const reviews = await axios.get("https://places.googleapis.com/v1/places/ChIJU3UaaA68cEgRBrD7gp9vg4Q?fields=reviews&key=" + process.env.API_KEY);
			res.json(reviews.data);
		} catch (error) {
			console.error("Error retrieving reviews:", error);
			res.status(500).json(error);
		}
	},
};
