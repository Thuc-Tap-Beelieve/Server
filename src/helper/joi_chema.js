import joi from "joi";

export const email = joi.string().pattern(new RegExp("gmail.com$")).required();
export const password = joi.string().min(6).required();
export const mobile = joi
  .string()
  .pattern(/^[0-9]{10}$/)
  .required()
  .messages({
    "string.base": "Mobile number must be a string",
    "string.pattern.base": "Invalid mobile number",
    "any.required": "Mobile number is required",
  });
export const name = joi.string();
export const address = joi.string();
