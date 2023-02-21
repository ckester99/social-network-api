const db = require("../config/connection");
const { Thought, User } = require("../models");
const seedUsers = require("./seedUsers");
const seedThoughts = require("./seedThoughts.js");

db.once("open", async () => {
    console.log("/////////SEEDING USERS/////////\n");
    await seedUsers();

    console.log("/////////SEEDING THOUGHTS//////\n");
    await seedThoughts();

    console.log("/////////COMPLETE//////////////");
});
