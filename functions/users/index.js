const Profile = require("../../models/Profile");
const bcrypt = require('bcrypt')
module.exports = {
  handleGet: (req, res) => {
    res.send("accepted response");
  },
  handlePost: async (req, res) => {
      console.log('in post')
      bcrypt.genSalt(10, function(err, salt) {
        bcrypt.hash(req.body.password, salt, function(err, hash) {
            // Store hash in your password DB.
            const newUser = new Profile({
              id:req.body.id,
              name: req.body.name,
              phone: req.body.phone,
              email: req.body.email,
              password: hash,
              posts: []
            });
            newUser.save((err) => {
              if (!err) {
                console.log("Addition sucessful");
              } else {
                console.log(err);
              }
            });
            res.send(newUser);
        });
      });
      //  const salt = await bcrypt.genSalt(10);
      // const hashPassword = await bcrypt.hash(req.body.password, salt);
      
   
   
  
  },
  handleDelete: (req, res) => {
    jwt.verify(req.token, "secretkey", (err, authData) => {
      if (err) {
        res.sendStatus(403);
      } else {
        const newUser = req.params.userId;
        console.log(newUser);
        Profile.deleteOne({ _id: newUser }).then((u) => {
          res.send("User Deleted");
        });
      }
    });
  },
  handleUpdate: (req, res) => {
    jwt.verify(req.token, "secretkey", (err, authData) => {
      if (err) {
        console.log(err);
      } else {
        const type = req.params.type;
        const newUser = req.params.userId;
        if (type === "user") {
          Profile.updateOne({ _id: newUser }, { name: "Sneha" }, (err) => {
            if (err) {
              console.log(err);
            } else {
              res.send("Updated");
            }
          });
        } else if (type === "password") {
          Profile.updateOne({ _id: newUser }, { password: "xyzabc" }, (err) => {
            if (err) {
              console.log(err);
            } else {
              res.send("Password Updated");
            }
          });
        }
      }
    });
  },
  handleLogin: (req, res) => {
    Profile.findOne({ name: req.body.name }, (err, foundUser) => {
      if (err) {
        console.log(err);
      } else {
        console.log(req.body.password);
        console.log(foundUser);
        if (!foundUser) {
          return res.status(400).send("Cannot find user");
        } else {
          bcrypt.compare(req.body.password, foundUser.password, function (
            err,
            result
          ) {
            if (result) {
              console.log("Success");
              jwt.sign({ foundUser }, "secretkey", (err, token) => {
                const Bearertoken = token;
                res.json(token);
              });
            } else {
              res.send("Noo");
            }
          });
        }
      }
    });
  },
};
