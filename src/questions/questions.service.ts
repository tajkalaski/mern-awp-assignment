/**
 * Data Model Interfaces
 */

import { Question } from "./question.interface";
import { Questions } from "./questions.interface";

/**
 * In-Memory Store
 */

const questions: Questions = {
  1: {
    id: 1,
    text: "Burger",
    answers: [
      {
        id: 1,
        text: "Blubb",
        rating: 10,
      },
    ],
  },
  2: {
    id: 2,
    text: "Pizza",
    answers: [
      {
        id: 2,
        text: "Blubb",
        rating: 10,
      },
    ],
  },
};

/**
 * Service Methods
 */

export const findAll = async (): Promise<Questions> => {
  return questions;
};

export const find = async (id: number): Promise<Question> => {
  const record: Question = questions[id];

  if (record) {
    return record;
  }

  throw new Error("No record found");
};

export const create = async (newQuestion: Question): Promise<void> => {
  const id = new Date().valueOf();
  questions[id] = {
    ...newQuestion,
    id,
  };
};

export const update = async (updatedQuestion: Question): Promise<void> => {
  if (questions[updatedQuestion.id]) {
    questions[updatedQuestion.id] = updatedQuestion;
    return;
  }

  throw new Error("No record found to update");
};

export const remove = async (id: number): Promise<void> => {
  const record: Question = questions[id];

  if (record) {
    delete questions[id];
    return;
  }

  throw new Error("No record found to delete");
};
