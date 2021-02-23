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

// route to bug log
htmlRouter.get("/buglog", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/buglog.html"));
});

// route to day 1
htmlRouter.get("/day1", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/day1/day1.html"));
});

// route to day 2
htmlRouter.get("/day2", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/day2/day2.html"));
});

// route to day 3
htmlRouter.get("/day3", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/day3/day3.html"));
});

// route to day 4
htmlRouter.get("/day4", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/day4/day4.html"));
});

// route to day 5
htmlRouter.get("/day5", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/day5/day5.html"));
});

// route to day 6
htmlRouter.get("/day6", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/day6/day6.html"));
});

// route to day 7
htmlRouter.get("/day7", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/day7/day7.html"));
});

// route to day 8
htmlRouter.get("/day8", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/day8/day8.html"));
});

// route to day 9
htmlRouter.get("/day9", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/day9/day9.html"));
});

// route to day 10
htmlRouter.get("/day10", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/day10/day10.html"));
});

// If no matching route is found default to index
htmlRouter.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/index.html"));
});

module.exports = htmlRouter;