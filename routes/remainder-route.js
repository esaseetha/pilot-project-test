import express from "express";
const router = express.Router();
import remainderController from "../controllers/remainder-controller.js";

router
  .route("/manual")

  .post(remainderController.notifyUser);

router
  .route("/shedule")

  .post(remainderController.remaindUser);

export default router;
