const mongoose = require("mongoose");
const UserSchema = mongoose.Schema({
  id: String,
  password: String,
});
const UserModel = mongoose.model("user", UserSchema);
module.exports = { UserModel };
