const path = require("path");
const dotenv = require("dotenv");
const axios = require('axios');

module.exports = {
	getReviews: async function (req, res) {		
		try {
			const reviews = await axios.get(`https://places.googleapis.com/v1/places/${process.env.LOCATION_ID}?fields=reviews,rating,userRatingCount&key=${process.env.API_KEY}`);
			res.json(reviews.data);
		} catch (error) {
			console.error("Error retrieving reviews:", error);
			res.status(500).json(error);
		}
	},
};
