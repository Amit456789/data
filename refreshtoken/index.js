const express = require("express");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const { UserModel } = require("./model/UserSchema");
const app = express();
app.get("/", (req, res) => {
  res.send("Done");
});
app.post("/signup",async(req,res)=>{
    const {id,password} = req.body;
    var token = jwt.sign({  id }, 'shhhhh');
const user  = new UserModel(id,password)
await user.save()
})
app.listen(8900, async () => {
  try {
    await mongoose.connect(
      `mongodb+srv://amit:amit@cluster0.nzlwx9h.mongodb.net/Jwt?retryWrites=true&w=majority`
    );

    console.log("running");
  } catch (error) {
    console.log(error);
  }
});
