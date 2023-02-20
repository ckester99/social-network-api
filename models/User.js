const mongoose = require("../config");
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

        thoughts: [mongoose.ObjectId],

        friends: [mongoose.ObjectId],
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
