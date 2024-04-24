import db from "../models";
import bcrypt from "bcryptjs";
const hashPassword = (password) =>
  bcrypt.hashSync(password, bcrypt.genSaltSync(8));
export const register = ({ email, password, mobile, name, address }) =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await db.User.findOrCreate({
        where: { email },
        defaults: {
          email,
          password: hashPassword(password),
          mobile,
          name,
          address,
        },
      });
      console.log(response);
      resolve({
        err: response[1] ? 0 : 1,
        mess: response[1] ? "Register Succesfully" : "Email is used",
      });
      resolve({
        err: 1,
        mess: "Register service",
      });
    } catch (error) {
      reject(error);
    }
  });
