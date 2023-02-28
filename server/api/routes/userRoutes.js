const router = require('express').Router();

const {
    login,
    signup
} = require("../controllers/userController")

router.route('/login').post(login);
router.route('/signup').post(signup);

module.exports = router;