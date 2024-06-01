import db from "../models";

export const createNewProduct = (body) =>
  new Promise(async (resolve, reject) => {
    try {
      console.log("Body received in service:", body);
      const response = await db.Products.findOrCreate({
        where: { id_pr: body?.id_pr },
        defaults: { ...body },
      });
      console.log("Response from findOrCreate:", response);
      resolve({
        err: response[1] ? 0 : 1,
        mess: response[1] ? "created" : "can't Create new Product",
      });
    } catch (error) {
      console.error("Error in createNewProduct service:", error);
      reject(error);
    }
  });
export const getAllproduct = () =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await db.Products.findAll();
      resolve({
        err: 0,
        mess: "Success",
        userData: response,
      });
    } catch (error) {
      reject(error);
    }
  });
