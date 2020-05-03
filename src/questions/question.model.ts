import * as mongoose from "mongoose";

const QuestionSchema = new mongoose.Schema({
  text: String,
  create: {
    type: Date,
    default: Date.now,
  },
  answers: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Answer",
  },
});

export const Question = mongoose.model("Question", QuestionSchema);
