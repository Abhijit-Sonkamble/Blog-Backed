const express = require("express");
const { registerAuthor, loginAuthor } = require("../../../controllers/author/author.controller");

const authorRoute = express.Router();

authorRoute.post("/registerAuthor" , registerAuthor);
authorRoute.post("/loginAuthor" , loginAuthor);



module.exports = authorRoute; 