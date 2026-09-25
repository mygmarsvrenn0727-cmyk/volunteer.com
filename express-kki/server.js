const express = require("express");
const mongoose = require("mongoose");
const User = require("./models/user.schema");
const jwt = require("jsonwebstoken");
const connnectDb = async () => {
  await mongoose.connect(
    "mongodb+srv://mygmarsvrenn0727_db_user:6vGgmllMoGiBiu49@cluster0.o2clg5a.mongodb.net"
  );
};

const app = express();
app.use(express.json());
const port = 2727;

connnectDb();

app.get("/", (req, res) => {
  res.send("Mongol hvn bnuu");
});

app.post("/signin", async (req, res) => {
  const body = req.body;
  console.log(body, "body kkki");

  const response = await User.create({
    username: body.username,
    email: body.email,
    password: body.password,
    age: body.age,
    classId: body.classId,
  });

  const token = await jwt.sign(
    { id: response._id, username: response.username },
    "firstsecret_key"
  );

  res.json(token).status(200);
});

app.get("/user", async (req, res) => {
  const users = await User.find;
  res.json(users);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
