const router = require("express").Router();
const { Thought, User } = require("../models");

router.get("/", async (req, res) => {
    try {
        const thoughts = await Thought.find({});
        res.json(thoughts);
    } catch (err) {
        res.status(400).json(err);
    }
});

router.get("/:id", async (req, res) => {
    try {
        const thoughtData = await Thought.findOne({ _id: req.params.id });
        res.json(thoughtData);
    } catch (err) {
        res.status(400).json(err);
    }
});

router.post("/", async (req, res) => {
    try {
        const thoughtData = await Thought.create(req.body);
        User.res.json(thoughtData);
    } catch (err) {
        res.status(400).json(err);
    }
});

router.put("/:id", async (req, res) => {
    try {
        const updatedThought = await Thought.findOneAndUpdate({ _id: req.params.id }, req.body, { returnDocument: "after" });
        res.send(`Thought ${updatedThought._id} updated!`);
    } catch (err) {
        res.status(400).json(err);
    }
});

router.post("/:id/reactions", async (req, res) => {
    try {
        const thoughtData = await Thought.findById(req.params.id);
        thoughtData.reactions.push(req.body);
        thoughtData.save();
        res.send("Thought added successfully!");
    } catch (err) {
        res.status(400).json(err);
    }
});

router.delete("/:id/reactions", async (req, res) => {
    try {
        const thoughtData = await Thought.findOne({ "reactions._id": req.body._id });
        thoughtData.reactions.forEach((reaction) => {
            if (reaction._id == req.body._id) {
                reaction.remove();
            }
        });
        thoughtData.save();
        res.send("Thought removed successfully!");
    } catch (err) {
        res.status(400).json(err);
    }
});

module.exports = router;
