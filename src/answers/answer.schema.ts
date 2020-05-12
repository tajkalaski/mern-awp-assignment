import * as mongoose from "mongoose";

const AnswerSchema = new mongoose.Schema({
  text: String,
  create: {
    type: Date,
    default: Date.now,
  },
  rating: Number,
});

export { AnswerSchema };
