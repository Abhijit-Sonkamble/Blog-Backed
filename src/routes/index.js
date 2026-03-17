const express = require("express");

const route = express.Router();

//Authentication Route
route.use("/auth", require("./auth/auth.route"))

//All fetch Author
route.use("/blog", require("./auth/blog/blog.route"))


module.exports = route;