const { User } = require("../models");
const mongoose = require("mongoose");

async function seedUsers() {
    await User.deleteMany({});

    await User.create([
        {
            _id: mongoose.Types.ObjectId("63f512a47a3b465f69888c67"),
            name: "Bobby Lee",
            email: "bobbylee@gmail.com",
            friends: [
                mongoose.Types.ObjectId("63f5132f845559947334741e"),
                mongoose.Types.ObjectId("63f5132f845559947334741d"),
                mongoose.Types.ObjectId("63f5132f845559947334741f"),
            ],
            thoughts: [mongoose.Types.ObjectId("63f8aded6fd569afa5f0c033")],
        },
        {
            _id: mongoose.Types.ObjectId("63f5132f845559947334741e"),
            name: "Cindy Kim",
            email: "cKim1@gmail.com",
            friends: [mongoose.Types.ObjectId("63f512a47a3b465f69888c67")],
            thoughts: [mongoose.Types.ObjectId("63f8aded6fd569afa5f0c03b")],
        },
        {
            _id: mongoose.Types.ObjectId("63f5132f845559947334741d"),
            name: "Robert Smith",
            email: "roberts@gmail.com",
            friends: [mongoose.Types.ObjectId("63f512a47a3b465f69888c67"), mongoose.Types.ObjectId("63f5132f845559947334741f")],
            thoughts: [mongoose.Types.ObjectId("63f8aded6fd569afa5f0c038"), mongoose.Types.ObjectId("63f8aded6fd569afa5f0c036")],
        },
        {
            _id: mongoose.Types.ObjectId("63f5132f845559947334741f"),
            name: "Sarah Ackerman",
            email: "sarahAck@gmail.com",
            friends: [mongoose.Types.ObjectId("63f512a47a3b465f69888c67"), mongoose.Types.ObjectId("63f5132f845559947334741d")],
        },
    ]);
}

module.exports = seedUsers;
