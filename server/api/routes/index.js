const router = require('express').Router();
const exampleRoutes = require('./exampleRoutes');
const userRoutes = require('./userRoutes');
const googleRoutes = require('./googleReviewRoute')

router.use('/examples', exampleRoutes);
router.use('/user', userRoutes);
router.use('/reviews', googleRoutes)

module.exports = router;