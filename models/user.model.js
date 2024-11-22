const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const JWT = require("jsonwebtoken");
const token = require("../config/config");
const userSchema = new mongoose.Schema(
   {
      username: {
         type: String,
         required: true,
         lowerCase: true,
         trim: true,
      },
      email: {
         type: String,
         required: true,
      },
      password: {
         type: String,
         required: true,
      },
      avatar: {
         type: String,
         required: true,
      },
      address: {
         type: String,
         required: true,
         lowerCase: true,
         trim: true,
      },
      refreshToken: {
         type: String,
         default: "",
      },
   },
   { timestamps: true }
);

userSchema.pre("save", async function (next) {
   if (!this.isModified("password")) return next();
   this.password = await bcrypt.hash(this.password, 10);
});

userSchema.methods.isPasswordCorrect = async function (password) {
   return await bcrypt.compare(password, this.password);
};

userSchema.methods.generateAccessToken = function () {
   return JWT.sign(
      {
         _id: this._id,
         email: this.email,
         username: this.username,
      },
      token.ACCESS_TOKEN_SECRET,
      {
         expiresIn: token.ACCESS_TOKEN_EXPIRY,
      }
   );
};

userSchema.methods.generateRefreshToken = function () {
   return JWT.sign(
      {
         _id: this._id,
      },
      token.REFRESH_TOKEN_SECRET,
      {
         expiresIn: token.REFRESH_TOKEN_EXPIRY,
      }
   );
};
const User = mongoose.model("User", userSchema);
module.exports = User;
