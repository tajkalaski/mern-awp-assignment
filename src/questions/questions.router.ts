import express, { Request, Response } from "express";
import * as QuestionService from "./questions.service";
import { Questions } from "./questions.interface";
import { Question } from "./question.interface";
export const questionsRouter = express.Router();

// GET questions/
questionsRouter.get("/", async (req: Request, res: Response) => {
  try {
    const questions: Questions = await QuestionService.findAll();

    res.status(200).send(questions);
  } catch (e) {
    res.status(404).send(e.message);
  }
});

// GET questions/:id
questionsRouter.get("/:id", async (req: Request, res: Response) => {
  const id: number = parseInt(req.params.id, 10);

  try {
    const question: Question = await QuestionService.find(id);

    res.status(200).send(question);
  } catch (e) {
    res.status(404).send(e.message);
  }
});

// POST questions/
questionsRouter.post("/", async (req: Request, res: Response) => {
  try {
    const question: Question = req.body.question;

    await QuestionService.create(question);

    res.sendStatus(201);
  } catch (e) {
    res.status(404).send(e.message);
  }
});

// PUT questions/
questionsRouter.put("/", async (req: Request, res: Response) => {
  try {
    const question: Question = req.body.question;

    await QuestionService.update(question);

    res.sendStatus(200);
  } catch (e) {
    res.status(500).send(e.message);
  }
});

// DELETE questions/:id
questionsRouter.delete("/:id", async (req: Request, res: Response) => {
  try {
    const id: number = parseInt(req.params.id, 10);
    await QuestionService.remove(id);

    res.sendStatus(200);
  } catch (e) {
    res.status(500).send(e.message);
  }
});
