const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const mongoose = require("mongoose");
require("dotenv").config();
const passport = require("passport");

//requiring facebook strategy...
require("./services/passport/facebook");
require("./services/passport/google");

const PORT = process.env.PORT || 8000;

//passport configs...
app.use(passport.initialize());

 mongoose.connect(process.env.DB_URI,{ useNewUrlParser: true , useUnifiedTopology: true})
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));

app.use(bodyParser.urlencoded({extended:true}));

//paths for version one APIs...
app.use("/v1", require("./routers/v1/path"));

app.listen(PORT, () => {
  console.log("Server running");
});
