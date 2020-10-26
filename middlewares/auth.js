const jwt = require("jsonwebtoken");
require("dotenv").config();
module.exports = {
  authorise: (req, res, next) => {
    const header = req.headers["authorization"];
    const token = header && header.split(" ")[1];
    if (!token) return res.sendStatus(401);

    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
      if (err) return res.sendStatus(401);
      req.userId = user._id;
      next();
    });
  },
};
