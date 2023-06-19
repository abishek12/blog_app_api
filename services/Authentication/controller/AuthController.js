import Jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import "dotenv/config";

import User from "../../User/model/UserModel.js";

let salt = bcrypt.genSaltSync(10);
let secret_key = process.env.SECRET_KEY;

const registerUser = async (req, res) => {
  try {
    let { firstName, middleName, lastName, email, password, role } = req.body;
    bcrypt.hash(password, salt, async (err, hash) => {
      await User.findOrCreate({
        where: {
          email: email,
        },
        defaults: {
          firstName: firstName,
          middleName: middleName,
          lastName: lastName,
          email: email,
          password: hash,
          role: role,
        },
      })
        .then(() => {
          return res.status(201).json({
            message: "User Registered",
          });
        })
        .catch((error) => {
          return res.status(500).json({
            message: error,
          });
        });
    });
  } catch (error) {
    return res.status(500).json({
      message: error,
    });
  }
};

const loginUser = async (req, res) => {
  try {
    let { email, password } = req.body;
    await User.findOne({
      where: {
        email: email,
      },
    })
      .then((value) => {
        bcrypt.compare(password, value.password, function (err, result) {
          if (result == true) {
            let token = Jwt.sign(
              {
                firstName: value.firstName,
                middleName: value.middleName,
                lastName: value.lastName,
                email: email,
                role: value.role,
              },
              secret_key
            );
            return res.status(200).json({
              message: "User Logged in",
              token: token,
            });
          } else {
            return res.status(200).json({
              message: "Password did not matched",
            });
          }
        });
      })
      .catch(() => {
        return res.status(404).json({
          message: "User not found",
        });
      });
  } catch (error) {
    return res.status(500).json({
      message: error,
    });
  }
};

export default { registerUser, loginUser };
