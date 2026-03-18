const express = require("express");

const auth = require("../../../middleware/auth.middleware");
const { addBlog, fetchAllBlog, fetchSingleBlog, updateBlog, deleteBlog } = require("../../../controllers/blog/blog.controller");

const blogRoute = express.Router();

blogRoute.post("/" , auth,  addBlog);

//Fetch 
blogRoute.get("/" , fetchAllBlog); 

//fetch single blog
blogRoute.get("/:id" , fetchSingleBlog);

//Update
blogRoute.patch("/:id" ,auth, updateBlog);

//Delete
blogRoute.delete("/:id" ,auth, deleteBlog);



module.exports = blogRoute; 