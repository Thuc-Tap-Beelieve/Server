import user from "./user";
import auth from "./auth";
import { internalSeverError, notFound } from "../middleware/handle_errors";
const initRoutes = (app) => {
  app.use("/api/v1/user", user);
  app.use("/api/v1/auth", auth);

  app.use(notFound);
};

module.exports = initRoutes;
