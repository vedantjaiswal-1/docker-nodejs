const router = require("express").Router();
const User = require("../model/user");

//get
router.get("/users", async (req, res) => {
    try {
      const getUser = await User.find();
      res.send(getUser);
    } catch (error) {
      res.status(400).send(error);
    }
  });

//post
router.post("/users", (req, res) => {
const name = req.body.name;
const email = req.body.email;

const newUser = new User({
    name,
    email,
});

newUser
    .save()
    .then(() => res.json(newUser))
    .catch((err) => res.status(400).json("Error" + err));
});

//get(id)
router.get("/users/:id", (req, res) => {
User.findById(req.params.id)
    .then((users) => res.json(users))
    .catch((err) => res.status(400).json("Error" + err));
});

//patch(id)
router.put("/users/:id", (req, res) => {
User.findById(req.params.id)
    .then((users) => {
    users.name = req.body.name;
    users.email = req.body.email;

    users
        .save()
        .then((user) => res.json(user))
        .catch((err) => res.status(400).json("Error" + err));
    })
    .catch((err) => res.status(400).json("Error " + err));
});
  
//delete(id)
router.delete("/users/:id", (req, res) => {
User.findByIdAndDelete(req.params.id)
    .then(() => res.json("User Deleted."))
    .catch((err) => res.status(400).json("Error" + err));
});

module.exports = router;