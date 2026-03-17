const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {

  const header = req.headers.authorization;

  if (!header) {
    return res.status(401).json({
      msg: "No token provided"
    });
  }

  const token = header.split(" ")[1];

  try {

    const verify = jwt.verify(token, process.env.SECRET);

    req.user = verify;
    console.log("verify ", verify);
    
    console.log(req.user);

    next();

  } catch (err) {

    return res.status(401).json({
      msg: "Invalid token"
    });

  }

};