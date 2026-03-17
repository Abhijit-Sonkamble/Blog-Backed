const express = require("express");
const authRoute = express.Router();

authRoute.use("/author" , require("./author/author.route"));

authRoute.use ("/blog", require("./blog/blog.route"))

module.exports = authRoute; 