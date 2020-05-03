import { Answers } from "./answers.interface";
import { Answer } from "./answer.interface";

/**
 * Service Methods
 */

// export const findAll = async (): Promise<Answers> => {
//   return answers;
// };

// export const find = async (id: number): Promise<Answer> => {
//   const record: Answer = answers[id];

//   if (record) {
//     return record;
//   }

//   throw new Error("No record found");
// };

// export const create = async (newAnswer: Answer): Promise<void> => {
//   const id = new Date().valueOf();
//   answers[id] = {
//     ...newAnswer,
//     id,
//   };
// };

// export const update = async (updatedAnswer: Answer): Promise<void> => {
//   if (answers[updatedAnswer.id]) {
//     answers[updatedAnswer.id] = updatedAnswer;
//     return;
//   }

//   throw new Error("No record found to update");
// };
