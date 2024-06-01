import joi from "joi";
import {
  code_cat,
  id_pr,
  priceProduct,
  productName,
  imageProduct,
  productColor,
  size,
  soluong,
} from "../helper/joi_chema";
import * as services from "../services";
import { badRequest, internalSeverError } from "../middleware/handle_errors";
const cloudinary = require("cloudinary").v2;

export const createNewProduct = async (req, res) => {
  console.log(req.body);
  try {
    const fileData = req.file;
    const { error } = joi
      .object({
        id_pr,
        priceProduct,
        code_cat,
        productName,
        imageProduct,
        productColor,
        size,
        soluong,
      })
      .validate({ ...req.body, imageProduct: fileData?.path });
    if (error) {
      if (fileData) cloudinary.uploader.destroy(fileData.filename);

      return badRequest(error.details[0].message, res);
    }
    const response = await services.createNewProduct(req.body, fileData);
    return res.status(200).json(response);
  } catch (error) {
    console.error("Error in createNewProduct:", error);
    return internalSeverError(res);
  }
};
//
//
// update

export const updateProduct = async (req, res) => {
  console.log(req.user);
  try {
    const fileData = req.file;
    console.log(req.body);
    const { error } = joi
      .object({
        id_pr,
      })
      .validate({ id_pr: req.body.id_pr });
    if (error) {
      if (fileData) cloudinary.uploader.destroy(fileData.filename);

      return badRequest(error.details[0].message, res);
    }
    const response = await services.updateProduct(req.body, fileData);
    return res.status(200).json(response);
  } catch (error) {
    console.error("Error in createNewProduct:", error);
    return internalSeverError(res);
  }
};
//

export const delProduct = async (req, res) => {
  try {
    const { error } = joi
      .object({
        id_pr,
      })
      .validate(req.query);
    if (error) {
      return badRequest(error.details[0].message, res);
    }
    const response = await services.delProduct(req.query);
    return res.status(200).json(response);
  } catch (error) {
    console.error("Error in createNewProduct:", error);
    return internalSeverError(res);
  }
};
//
//
// Get All
export const getAllproduct = async (req, res) => {
  try {
    const response = await services.getAllproduct();
    return res.status(200).json(response);
  } catch (error) {
    return internalSeverError(res);
  }
};
