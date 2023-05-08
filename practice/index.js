const express = require("express");
const mongoose = require("mongoose");
const { UserModel } = require("./model/userSchema");
const app = express();
app.use(express.json());
app.get("/", (req, res) => {
  res.send(`Done`);
});
app.post("/", async(req, res) => {
    // res.write(req.body);
  const {name,father,age} = req.body;
  console.log(name,father,age)
  const data =  new UserModel(req.body)
  await data.save();
  res.send(`Data Posted`);
});
app.listen(6900, async () => {
  try {
    await mongoose.connect(
      `mongodb+srv://amit:amit@cluster0.nzlwx9h.mongodb.net/practice1?retryWrites=true&w=majority`
    );
    console.log(`Server is running on 6900`);
  } catch (error) {
    console.log({ error: error });
  }
});
