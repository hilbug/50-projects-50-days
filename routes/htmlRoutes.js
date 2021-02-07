// DEPENDENCIES
// Path package to get the correct file path for html
const path = require("path");
// Routing
const express = require("express");
const htmlRouter = express.Router();

// route to Homepage
htmlRouter.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/index.html"));
});

// route to day 1
htmlRouter.get("/day1", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/day1.html"));
});

// route to day 2
htmlRouter.get("/day2", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/day2.html"));
});

// If no matching route is found default to index
htmlRouter.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/index.html"));
});

module.exports = htmlRouter;