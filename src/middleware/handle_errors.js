import createError from "http-errors";

export const badRequest = (err, res) => {
  const error = createError.BadRequest(err);
  return res.status(error.status).json({
    err: 1,
    mes: error.message,
  });
};

export const internalSeverError = (res) => {
  const error = createError.InternalServerError();
  return res.status(error.status).json({
    err: 1,
    mes: error.message,
  });
};

export const notFound = (req, res) => {
  const error = createError.NotFound("This is route is not define");
  return res.status(error.status).json({
    err: 1,
    mes: error.message,
  });
};
