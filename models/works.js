import { Schema, model, models } from "mongoose";

const WorkSchema = new Schema({
  creator: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  worktitle: {
    type: String,
    required: [true, "Title is required"],
  },
  workurl: {
    type: String,
    required: [true, "URL is required"],
  },
  workimg: {
    type: String,
    required: [false, "Image is optional"],
  },
  tag: {
    type: String,
    required: [true, "Tag is required"],
  },
  status: {
    type: Boolean,
    required: [true, "Tag is required"],
  },
});

const Work = models.Work || model("Work", WorkSchema);

export default Work;
