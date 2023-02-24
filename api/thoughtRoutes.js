const router = require("express").Router();
const { Thought } = require("../models");

router.get("/", async (req, res) => {
    try {
        const thoughts = await Thought.find({});
        res.json(thoughts);
    } catch (err) {
        res.status(400).json(err);
    }
});

module.exports = router;
