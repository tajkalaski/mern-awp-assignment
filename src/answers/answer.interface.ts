import { Document } from "mongoose";
export interface Answer extends Document {
  id: number;
  text: string;
  rating: number;
}
