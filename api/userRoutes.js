const router = require("express").Router();
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
        const deleteData = await User.deleteOne({ _id: req.params.id });
        if (deleteData.deletedCount) {
            res.send(`Userid: ${req.params.id} deleted successfully`);
        } else {
            throw new Error("User not found!");
        }
    } catch (err) {
        console.log(err);
        res.status(400).json({ message: err.message });
    }
});

module.exports = router;
