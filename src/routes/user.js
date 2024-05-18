import * as controllers from "../controllers";
import express from "express";
import verifyToken from "../middleware/verify_token";
import { isAdmin } from "../middleware/verify_role";
const router = express.Router();

router.use(verifyToken);
// router.use(isAdmin);
router.get("/", controllers.getCurrent);
module.exports = router;
