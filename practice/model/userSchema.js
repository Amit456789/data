const mongoose = require("mongoose");
const UserSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    minLength: 4
  },

  father: {
    type: String,
    required:true,
   
  },
  age:{
    type:Number,
    required:true,
    min:24,
    max:99
  }


});
const UserModel = mongoose.model("new_user", UserSchema);
module.exports = { UserModel };
