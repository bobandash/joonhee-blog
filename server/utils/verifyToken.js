require('dotenv').config();
const jwt = require('jsonwebtoken')

module.exports = function verifyToken(req, res, next){
  const bearerHeader = req.headers["authorization"];
  if(bearerHeader){
    const bearerToken = bearerHeader.split(' ')[1];
    jwt.verify(bearerToken, process.env.SECRET_TOKEN, (err, authData) => {
      if(err) {
        res.sendStatus(403);
      } else {
        req.user = authData;
        next();
      }
    })
  } else {
    res.sendStatus(403);
  }  
}