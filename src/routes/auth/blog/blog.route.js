const express = require("express");

const auth = require("../../../middleware/auth.middleware");
const { addBlog, fetchAllBlog, fetchSingleBlog } = require("../../../controllers/blog/blog.controller");

const blogRoute = express.Router();

blogRoute.post("/" , auth,  addBlog);

//Fetch 
blogRoute.get("/" , fetchAllBlog); 

//fetch single blog
blogRoute.get("/:id" , fetchSingleBlog); 



module.exports = blogRoute; 