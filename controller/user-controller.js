import User from "../model/userSchema.js";

export const userSignup = async (req, res) => {
  try {
    const exits = await User.findOne({ username: req.body.username });
    if (exits) {
      return res.status(401).json({ message: "User already exists" });
    }

    const user = req.body;
    const newUser = new User(user);
    await newUser.save();

    res.status(200).json({ message: "User successfully created" });
    // console.log(req.body);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const userLogin = async (req, res) => {
  try {
    const username = req.body.username;
    const password = req.body.password;

    let user = await User.findOne({ username: username, password: password });

    if (user) {
      return res.status(200).json(`${username} successfully logged in`);
    } else {
      return res.status(401).json("Invalid username or password");
    }
  } catch (error) {
    res.status(500).json("Error", error.message);
  }
};
