const { Thought } = require("../models");
mongoose = require("mongoose");

async function seedThoughts() {
    await Thought.deleteMany({});

    await Thought.create([{}]);
}

module.exports = seedThoughts;
