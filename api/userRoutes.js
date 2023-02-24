const router = require("express").Router();
const { User, Thought } = require("../models");

router.get("/", async (req, res) => {
    try {
        const users = await User.find({});
        res.json(users);
    } catch (err) {
        res.status(400).json(err);
    }
});

router.get("/:id", async (req, res) => {
    try {
        const userData = await User.findOne({ _id: req.params.id }).populate(["friends", "thoughts"]);
        if (!userData) {
            throw new Error("No User Found!");
        }
        res.json(userData);
    } catch (err) {
        res.status(400).json(err);
    }
});

module.exports = router;
