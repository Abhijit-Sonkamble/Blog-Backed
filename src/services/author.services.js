const Author = require("../model/author.model");

module.exports = class AuthorAuthService {
    //Class chya aat function key word nahi yet tyamule registerAdmin mage nahi dile
    async registerAuthor(body) {

        try {
            return await Author.create(body); // .create hi asynchromous method aahe tyamle ithe async/await dile
        } catch (error) {
            console.log("Author Service error : ", error)
        }

    }

    // //Fetch blog karala
    async fetchSingleAdmin(body){
        try {
            return await Author.findOne(body)
        } catch (error) {
            console.log("Author Not Fetched....!");
        }
    }

    // //Fetch All Admin
    // async fetchAllAdmin(){
    //     try {
    //         return await Admin.find()
    //     } catch (error) {
    //         console.log("Admin Not Fetched....!");
    //     }
    // }

    async updateBlog () {
        try {
            
        } catch (error) {
            console.log("Error in deleteBlog services", error)
        }
    }


}