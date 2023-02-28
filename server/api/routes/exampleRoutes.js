const router = require('express').Router();
const {
    getExamples,
    createExample,
    getSingleExample,
    updateExample,
    deleteExample
} = require('../controllers/exampleController')

router.route('/').get(getExamples).post(createExample);

router
  .route('/:id')
  .get(getSingleExample)
  .put(updateExample)
  .delete(deleteExample);

module.exports = router;