import { Answer } from "../answers/answer.interface";

export interface Question {
  id: number;
  text: string;
  answers: Answer[] | null;
}
