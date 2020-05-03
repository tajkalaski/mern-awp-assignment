import * as mongoose from "mongoose";

const AnswerSchema = new mongoose.Schema({
  text: String,
  create: {
    type: Date,
    default: Date.now,
  },
  question: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Question",
  },
  rating: Number,
});

export const Answer = mongoose.model("Answer", AnswerSchema);
