import express from "express";

import cors from "cors";
import initRoutes from "./src/routes";
require("dotenv").config();

require("./db_connection");

const app = express();
app.use(
  cors({
    origin: process.env.CLIENT_URL,
    methods: ["GET", "POST", "PUT", "DELETE"],
  })
);
// CRUD
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//
initRoutes(app);
const PORT = process.env.PORT || 8888;
const listener = app.listen(PORT, () => {
  console.log("Sever running on PORT " + listener.address().port);
});