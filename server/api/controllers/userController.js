const { User } = require("../../models");
const { signToken } = require("../../utils/auth");

module.exports = {
    async login(req, res) {
        const { email, password } = req.body;
        try {
            const user = await User.findOne({ email });
            console.log(user);
            if (!user) {
                throw new Error("Incorrect credentials");
            }

            const correctPw = await user.isCorrectPassword(password);

            if (!correctPw) {
                throw new Error("Incorrect credentials");
            }

            const token = signToken(user);

            res.json(token);
        } catch (error) {
            res.json(500).json(error);
        }
    },
    async signup(req, res) {
        const { email, password } = req.body;

        try {
            const user = await User.create({ email, password });
            const token = signToken(user);
            res.json(token);
        } catch (error) {
            res.json(500).json(error);
        }
    },
};
