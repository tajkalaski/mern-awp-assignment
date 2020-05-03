import { Question } from "./question.interface";
import { Question as QuestionModel } from "./question.model";

export const findAll = async () => {
  return QuestionModel.find({}, () => {});
};

export const find = async (id: string) => {
  return QuestionModel.findById(id, (err: Error) => {
    if (err) {
      console.log(err);
    }
  });
};

export const create = async (newQuestion: Question) => {
  const createNewQuestion = new QuestionModel(newQuestion);
  return createNewQuestion.save();
};

export const update = async (id: string, updatedQuestion: Question) => {
  return QuestionModel.findByIdAndUpdate(id, updatedQuestion);
};

export const remove = async (id: string) => {
  return QuestionModel.findByIdAndDelete(id);
};

// https://dev.to/nyagarcia/pokeapi-rest-in-nodejs-with-express-typescript-mongodb-and-docker-part-3-494a
