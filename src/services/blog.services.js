const Blog = require("../model/blog.model");

module.exports = class BlogAuthService {
    
    async addBlog(body) {

        try {
            return await Blog.create(body); 
        } catch (error) {
            console.log("Blog Service error : ", error)
        }

    }

    // Fetch blog karala
    async fetchSingleBlog(body){
        try {
            return await Blog.findOne(body)
        } catch (error) {
            console.log("Blog Not Fetched....!");
        }
    }

    //Fetch All Blog
    async fetchAllBlog(){
        try {
            return await Blog.find()
        } catch (error) {
            console.log("Blog Not Fetched....!");
        }
    }

    async updateBlog(query,body){
        try {
            return Blog.findOneAndUpdate(query , body, {new:true})
        } catch (error) {
            console.log("Error in updateBlog", error)
        }
    }


}