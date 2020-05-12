import * as mongoose from "mongoose";
import { AnswerSchema } from "../answers/answer.schema";

const QuestionSchema = new mongoose.Schema({
  text: String,
  create: {
    type: Date,
    default: Date.now,
  },
  answers: [AnswerSchema],
});

export const Question = mongoose.model("Question", QuestionSchema);
