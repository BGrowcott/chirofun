const { Schema, model } = require("mongoose");

const exampleSchema = new Schema(
    {
        name: {
            type: String,
            required: true
        },
        age: Number
    },
    {
        timestamps: true,
    }
);

const Example = model("example", exampleSchema);

module.exports = Example;