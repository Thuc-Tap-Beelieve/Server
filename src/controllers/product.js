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

export const createNewProduct = async (req, res) => {
  console.log(req.body);
  try {
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
      .validate(req.body);
    if (error) return badRequest(error.details[0].message, res);
    const response = await services.createNewProduct(req.body);
    return res.status(200).json(response);
  } catch (error) {
    console.error("Error in createNewProduct:", error);
    return internalSeverError(res);
  }
};
export const getAllproduct = async (req, res) => {
  try {
    const response = await services.getAllproduct();
    return res.status(200).json(response);
  } catch (error) {
    return internalSeverError(res);
  }
};
