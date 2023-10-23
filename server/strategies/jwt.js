require('dotenv').config()
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;

module.exports = new JwtStrategy({
  secretOrKey: process.env.SECRET_TOKEN,
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken()
}, (jwt_payload, done) => {
    if (jwt_payload.email === process.env.ADMIN_EMAIL) {
        return done(null, true)
    }
    return done(null, false)
}) 