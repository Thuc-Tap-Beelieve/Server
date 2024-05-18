import { internalSeverError } from "../middleware/handle_errors";
import * as services from "../services";
// import { email, password, mobile, address, name } from "../helper/joi_chema";
// import joi from "joi";

export const getCurrent = async (req, res) => {
  try {
    const { id } = req.user;
    const response = await services.getOne(id);
    return res.status(200).json(response);
  } catch (error) {
    return internalSeverError(res);
  }
};
