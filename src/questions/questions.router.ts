import express, { Request, Response } from "express";
import * as QuestionService from "./questions.service";
import { Question } from "./question.interface";
export const questionsRouter = express.Router();

// GET questions/
questionsRouter.get("/", async (req: Request, res: Response) => {
  try {
    const questions = await QuestionService.findAll();

    res.status(200).send(questions);
  } catch (e) {
    res.status(404).send(e.message);
  }
});

// GET questions/:id
questionsRouter.get("/:id", async (req: Request, res: Response) => {
  const id: string = req.params.id;

  try {
    const question = await QuestionService.find(id);

    res.status(200).send(question);
  } catch (e) {
    res.status(404).send(e.message);
  }
});

// POST questions/
questionsRouter.post("/", async (req: Request, res: Response) => {
  try {
    const question: Question = req.body;

    await QuestionService.create(question);

    res.sendStatus(201);
  } catch (e) {
    res.status(404).send(e.message);
  }
});

// PUT questions/
questionsRouter.put("/:id", async (req: Request, res: Response) => {
  try {
    const questionId: string = req.params.id;
    const question: Question = req.body;

    await QuestionService.update(questionId, question);

    res.sendStatus(200);
  } catch (e) {
    res.status(500).send(e.message);
  }
});

// DELETE questions/:id
questionsRouter.delete("/:id", async (req: Request, res: Response) => {
  try {
    const id: string = req.params.id;
    await QuestionService.remove(id);

    res.sendStatus(200);
  } catch (e) {
    res.status(500).send(e.message);
  }
});
