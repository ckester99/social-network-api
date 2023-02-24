const mongoose = require("mongoose");
const { Thought } = require("../models");

async function seedThoughts() {
    await Thought.deleteMany({});

    await Thought.create([
        {
            _id: mongoose.Types.ObjectId("63f8aded6fd569afa5f0c033"),
            thoughtText: "I love learning new js frameworks!",
            createdAt: new Date("2023-01-17T12:24:05"),
            username: "Bobby Lee",
            reactions: [
                {
                    reactionBody: "I do too!!",
                    username: "Cindy Kim",
                    createdAt: new Date("2023-01-17T13:15:10"),
                },
                {
                    reactionBody: "React is the best!",
                    username: "Sarah Ackerman",
                    createdAt: new Date("2023-01-17T13:19:17"),
                },
            ],
        },
        {
            _id: mongoose.Types.ObjectId("63f8aded6fd569afa5f0c036"),
            thoughtText: "I recently started using tailwindCSS!",
            createdAt: new Date("2023-01-15T14:12:03"),
            username: "Robert Smith",
            reactions: [
                {
                    reactionBody: "Very cool. I like tailwind much better than bootstrap",
                    username: "Bobby Lee",
                    createdAt: new Date("2023-01-15T14:45:56"),
                },
            ],
        },
        {
            _id: mongoose.Types.ObjectId("63f8aded6fd569afa5f0c038"),
            thoughtText: "noSQL databases are very cool!",
            createdAt: new Date("2023-01-24T17:13:05"),
            username: "Robert Smith",
            reactions: [
                {
                    reactionBody: "Mongo is great for scaling horizontally",
                    username: "Bobby Lee",
                    createdAt: new Date("2023-01-24T17:13:05"),
                },
                {
                    reactionBody: "I love breaking free from SQL schemas!",
                    username: "Sarah Ackerman",
                    createdAt: new Date("2023-01-25T09:06:45"),
                },
            ],
        },
        {
            _id: mongoose.mongoose.Types.ObjectId("63f8aded6fd569afa5f0c03b"),
            thoughtText: "Svelte might be my favorite front end framework right now",
            createdAt: new Date("2023-02-11T11:47:56"),
            username: "Cindy Kim",
            reactions: [
                {
                    reactionBody: "I love how quick it is for getting small apps running!",
                    username: "Bobby Lee",
                    createdAt: new Date("2023-02-11T14:34:58"),
                },
                {
                    reactionBody: "Svelte is great!",
                    username: "Robert Smith",
                    createdAt: new Date("2023-02-11T15:12:27"),
                },
            ],
        },
    ]);
}

module.exports = seedThoughts;
