const router = require("express").Router();
const { default: mongoose } = require("mongoose");
const { User, Thought } = require("../models");
const { findOneAndUpdate } = require("../models/User");

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

router.post("/", async (req, res) => {
    try {
        User.create(req.body);
        res.send("User created successfully!");
    } catch (err) {
        res.status(400).json(err);
    }
});

router.put("/:id", async (req, res) => {
    try {
        const updatedUser = await User.findOneAndUpdate({ _id: req.params.id }, req.body, { returnDocument: "after" });
        if (updatedUser) {
            res.send(`${updatedUser.name} updated successfully`);
        } else {
            throw new Error("User not found!");
        }
    } catch (err) {
        console.log(err);
        res.status(400).json(err);
    }
});

router.delete("/:id", async (req, res) => {
    try {
        const deletedUser = await User.findOne({ _id: req.params.id });
        const deleteData = await User.deleteOne({ _id: req.params.id });
        if (deleteData.deletedCount) {
            await Thought.deleteMany({ username: deletedUser.name });
            const thoughtsReactedTo = await Thought.find({ "reactions.username": deletedUser.name });
            thoughtsReactedTo.forEach((thought) => {
                thought.reactions.forEach((reaction) => {
                    if (reaction.username == deletedUser.name) {
                        reaction.remove();
                    }
                });
                thought.save();
            });
            res.send(`Userid: ${req.params.id} deleted successfully`);
        } else {
            throw new Error("User not found!");
        }
    } catch (err) {
        console.log(err);
        res.status(400).json({ message: err.message });
    }
});

router.post("/:id/friends/:friendId", async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        const friend = await User.findById(req.params.friendId);
        if (!(user && friend)) {
            console.log("here");
            throw new Error("User not found!");
        }

        user.friends.push(req.params.friendId);
        user.save();
        friend.friends.push(req.params.id);
        friend.save();
        res.send("Friend added successfully!");
    } catch (err) {
        res.status(400).json(err);
    }
});

router.delete("/:id/friends/:friendId", async (req, res) => {
    try {
        await User.updateMany({}, { $pull: { friends: req.params.id } });
        await User.updateMany({}, { $pull: { friends: req.params.friendId } });

        res.send("Friend removed successfully!");
    } catch (err) {
        res.status(400).json(err);
    }
});

module.exports = router;
