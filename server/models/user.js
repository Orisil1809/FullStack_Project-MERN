const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true }, // unique indexes this field so it can be fetched quicker
  password: { type: String, required: true, minlength: 6 },
  image: { type: String, required: true },
  places: [{ type: Schema.Types.ObjectId, required: true, ref: "Place" }],
});

userSchema.plugin(uniqueValidator); // validates that email is unique

module.exports = mongoose.model("User", userSchema);
