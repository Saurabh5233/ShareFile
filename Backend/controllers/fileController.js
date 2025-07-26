import File from "../models/File.js";
import { nanoid } from "nanoid";

// Accepts file metadata from frontend (not the file itself)
export const uploadFileController = async (req, res) => {
  try {
    const { originalName, uploadThingUrl, size } = req.body;
    if (!originalName || !uploadThingUrl || !size) {
      return res.status(400).json({ message: "Missing file data" });
    }

    const downloadId = nanoid(10);

    await File.create({
      originalName,
      uploadThingUrl,
      size,
      downloadId,
    });

    res.json({
      message: "File uploaded successfully",
      downloadLink: `${process.env.BASE_URL}/api/files/${downloadId}`,
    });
  } catch (err) {
    // console.log(err.message);
    res.status(500).json({ message: err.message });
  }
};

export const downloadFileController = async (req, res) => {
  try {
    const { id } = req.params;
    const file = await File.findOne({ downloadId: id });
    if (!file) return res.status(404).json({ message: "File not found" });

    res.redirect(file.uploadThingUrl);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};