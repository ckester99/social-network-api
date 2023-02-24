const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");

const userSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            unique: true,
        },

        email: {
            type: String,
            required: true,
            unique: true,
            match: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
        },

        thoughts: [{ type: mongoose.Schema.Types.ObjectId, ref: "thought" }],

        friends: [{ type: mongoose.Schema.Types.ObjectId, ref: "user" }],
    },
    {
        toJSON: {
            virtuals: true,
        },
    }
);
userSchema.plugin(uniqueValidator);
userSchema.virtual("friendCount").get(function () {
    return this.friends.length;
});

const User = mongoose.model("user", userSchema);

module.exports = User;
