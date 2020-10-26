const passport = require('passport')
const router = require('express').Router()
const Profile=require('../../../models/Profile')
const GoogleStrategy = require('passport-google-oauth20').Strategy
require('dotenv').config()


passport.serializeUser(function(user, done) {
    done(null, user.id);
  });
  
  passport.deserializeUser(function(id, done) {
    Profile.findById(id, function(err, user) {
      done(err, user);
    });
  });

passport.use(new GoogleStrategy({
    clientID: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
    callbackURL: "http://localhost:3000/v1/user/google/callback",
    userProfileURL:"https://www.googleapis.com/oauth2/v3/userinfo"
  },
  function(accessToken, refreshToken, profile, done) {
    Profile.findOrCreate({ googleId: profile.id }, (err, user)=> {
      return done(err, profile);
    });
  }
));

