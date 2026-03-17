const BlogAuthService = require("../../services/blog.services")
const blogAuthService =new BlogAuthService();

//For status code
const statusCode = require("http-status-codes");

//For error handle moment
const moment = require('moment');
const { successRes, errorRes } = require("../../utils/response");
const { MSG } = require("../../utils/msg");



//Register Author
module.exports.addBlog = async(req, res)=>{
     try {

      //   const blog = await blogAuthService.fetchSingleBlog();

      //   if (blog) {
      //       return res.status(statusCode.BAD_REQUEST).json(successRes(statusCode.BAD_REQUEST, true, MSG.BLOG_NOT_FOUND))
      //   }

        req.body.create_at = moment().format('DD/MM/YYYY, h:mm:ss a');
        req.body.update_at = moment().format('DD/MM/YYYY, h:mm:ss a');

        const newBlog = await blogAuthService.addBlog(req.body); 
        if (!newBlog) {
            console.log("Blog Not Added : "); 
            return res.status(statusCode.BAD_REQUEST).json(errorRes(statusCode.BAD_REQUEST, true, MSG.BLOG_CREATE_FAILED)); 
        } 
        return res.status(statusCode.CREATED).json(successRes(statusCode.CREATED, false, MSG.BLOG_CREATE_SUCCESS, newBlog)); //ithe aapn newAdmin pass kela tyamule aapn data fetch karu shakto postman madhe and console madhe
     } catch (err) {
        console.log("Error : ",err)
     }
    }



//Fetch all blog
module.exports.fetchAllBlog = async(req, res)=>{
     try {
      const allBlog = await blogAuthService.fetchAllBlog();

       return res.status(statusCode.OK).json(successRes(statusCode.OK, false, MSG.BLOG_FETCH_SUCCESS , allBlog)); 
     } catch (err) {
        console.log("Error in fetchAll : ",err)
     }
}

// single Fetch
module.exports.fetchSingleBlog = async(req, res)=>{
     try {
      const singleBlog = await blogAuthService.fetchSingleBlog();

       return res.status(statusCode.OK).json(successRes(statusCode.OK, false, MSG.BLOG_FETCH_SUCCESS , singleBlog)); 
     } catch (err) {
        console.log("Error in Single Fetch : ",err)
     }
}