const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: [true, "User must have a firstName"],
    minLength: [3, "firstName must have a minimum of 3 characters"],
    maxLength: [20, "firstName must be 20 characters or less"],
  },
  lastName: {
    type: String,
    required: [true, "User must have a lastName"],
    minLength: [3, "lastName must have a minimum of 3 characters"],
    maxLength: [20, "lastName must be 20 characters or less"],
  },
  email: {
    type: String,
    required: [true, "User must have an email address"],
    unique: true,
    validate: {
      validator: (value) => {
        return /\S+@\S+\.\S+/.test(value);
      },
      message: "Email address must be valid",
    },
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
  company: {
    type: String,
    required: false,
  },
});

const User = mongoose.models.User || mongoose.model("User", userSchema);

export default User;
