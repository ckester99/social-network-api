const mongoose = require("mongoose");

reactionSchema = new mongoose.Schema({
    reactionId: {
        type: mongoose.ObjectId,
        default: mongoose.Types.ObjectId,
    },

    reactionBody: {
        type: String,
        required: true,
        maxLength: 280,
    },

    username: {
        type: String,
        required: true,
    },

    createdAt: {
        type: Date,
        default: Date.now,
        get: (timeStamp) => {
            timeStamp.toLocaleString("en-US", { timeZone: "EST" });
        },
    },
});

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

    username: {
        type: String,
        required: true,
    },

    reactions: [reactionSchema],
});
const Thought = mongoose.model("thought", thoughtSchema);

module.exports = Thought;
