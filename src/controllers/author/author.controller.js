const AuthorAuthService = require("../../services/author.services")
const authorAuthService =new AuthorAuthService();

//For status code
const statusCode = require("http-status-codes");

//For error handle moment
const moment = require('moment');
const { successRes, errorRes } = require("../../utils/response");
const { MSG } = require("../../utils/msg");

//Password Hash and encrypt sathi
const bcrypt = require ("bcrypt");

//JWT import
const jwt = require("jsonwebtoken");



//Register Author
module.exports.registerAuthor = async(req, res)=>{
     try {

        //Password la bcrypt karte he req.body madhun password gheil and tyatun bcrypt karel
      req.body.password =   await bcrypt.hash(req.body.password, 12)

        const newAuthor = await authorAuthService.registerAuthor(req.body); //Yachya madhe adminServiceAuth ithun gheil and registerAdmin madhe takel req.body madhe
        if (!newAuthor) {
            console.log("Author Not Added : "); 
            return res.status(statusCode.BAD_REQUEST).json(errorRes(statusCode.BAD_REQUEST, true, MSG.AUTHOR_REGISTER_FAILED)); 
        } 
        return res.status(statusCode.CREATED).json(successRes(statusCode.CREATED, false, MSG.AUTHOR_REGISTER_SUCCESS, newAuthor)); //ithe aapn newAdmin pass kela tyamule aapn data fetch karu shakto postman madhe and console madhe
     } catch (err) {
        console.log("Error : ",err)
     }
    }

//Login Author
module.exports.loginAuthor = async(req, res) => {

   try {
      
 const author = await authorAuthService.fetchSingleAdmin({email: req.body.email});

     const isPassword = await bcrypt.compare(req.body.password, author.password); // ithe compare madhe compare(jithun password yetoy, encrypt password kuthun yetoy te);

     if (!isPassword) {
        return res.status(statusCode.BAD_REQUEST).json(errorRes(statusCode.BAD_REQUEST, true, MSG.INVALID_CREDENTIALS));
     }


     //JWT logic
     const payload = {
      authorID : author.id
     }

     const token = jwt.sign(payload, process.env.SECRET);

        return res.status(statusCode.OK).json(successRes(statusCode.OK, false, MSG.AUTHOR_LOGIN_SUCCESS, {token})); //ithe aapn newAdmin pass kela tyamule aapn data fetch karu shakto postman madhe and console madhe
   } catch (err) {
       console.log("Error in login controller: ", err)
   }

}