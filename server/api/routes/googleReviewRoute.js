const router = require('express').Router();
const {
    getReviews
} = require('../controllers/googleReviewsController')

router.route('/').get(getReviews);

module.exports = router;