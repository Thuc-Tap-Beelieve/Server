import * as controllers from "../controllers";
import express from "express";
import verifyToken from "../middleware/verify_token";
import { isAdmin } from "../middleware/verify_role";
const router = express.Router();

// router.use(verifyToken);
// router.use(isAdmin);
// router.get("/", verifyToken, controllers.getCurrent);
router.post("/", controllers.createNewProduct);
router.get("/get-all", controllers.getAllproduct);
module.exports = router;
