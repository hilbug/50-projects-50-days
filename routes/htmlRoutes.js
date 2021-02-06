// DEPENDENCIES
// Path package to get the correct file path for html
const path = require("path");
// Routing
const express = require("express");
const htmlRouter = express.Router();

// route to day 1
htmlRouter.get("/exercise", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/day1.html"));
});

// route to day 2
htmlRouter.get("/stats", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/day2.html"));
});

// If no matching route is found default to index
htmlRouter.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/index.html"));
});

module.exports = htmlRouter;