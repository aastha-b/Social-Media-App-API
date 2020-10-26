const googleStrategy = require("passport-google-oauth20").Strategy;
const passport = require("passport");
const jwt = require("jsonwebtoken");
require("dotenv").config();
passport.use(
  new googleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: `${process.env.HOST}/v1/callback/google`,
      profileFields: [
        "id",
        "displayName",
        "name",
        "gender",
        "picture.type(large)",
        "email",
      ],
    },
    function (token, refreshToken, profile, done) {
      if (profile !== null) {
        //save user details in database from "profile" object...
        let user = { _id: 123 };
        const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET);
        console.log(accessToken);
        done(null, true);
      }
    }
  )
);
