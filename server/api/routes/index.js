const router = require('express').Router();
const exampleRoutes = require('./exampleRoutes');
const userRoutes = require('./userRoutes');

router.use('/examples', exampleRoutes);
router.use('/user', userRoutes);

module.exports = router;