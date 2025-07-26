import mongoose from "mongoose";

const fileSchema = new mongoose.Schema(
  {
    originalName: { type: String, required: true },
    uploadThingUrl: { type: String, required: true },
    size: { type: Number, required: true },
    downloadId: { type: String, required: true, unique: true },
  },
  { timestamps: true }
);

const File = mongoose.model("File", fileSchema);
export default File;