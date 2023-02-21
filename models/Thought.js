const mongoose = require("mongoose");

const thoughtSchema = new mongoose.Schema({
    thoughtText: {
        type: String,
        required: true,
        minLength: 1,
        maxLength: 280,
    },

    createdAt: {
        type: Date,
        default: Date.now,
        get: (timeStamp) => {
            timeStamp.toLocaleString("en-US", { timeZone: "EST" });
        },
    },

    userName: {
        type: String,
        required: true,
    },
});
const Thought = mongoose.model("thought", thoughtSchema);

module.exports = Thought;
