import { Answer } from "../answers/answer.interface";
import { Document } from "mongoose";

export interface Question extends Document {
  id: number;
  text: string;
  answers: Answer[] | null;
}
