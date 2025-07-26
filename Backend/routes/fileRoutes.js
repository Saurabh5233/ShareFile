import express from "express";
import { uploadFileController, downloadFileController } from "../controllers/fileController.js";

const router = express.Router();

router.post(
  "/uploadFile",
  uploadFileController
);

router.get("/:id", downloadFileController);

export default router;