import * as dotenv from "dotenv";
import express from "express";
import cors from "cors";
import helmet from "helmet";
import mongoose from "mongoose";
import { questionsRouter } from "./questions/questions.router";
import { errorHandler } from "./middleware/error.middleware";
import { notFoundHandler } from "./middleware/404.middlewre";
import path from "path";
dotenv.config();

// We want to error out when no PORT was set in .env file
if (!process.env.PORT) {
  process.exit(1);
}

const PORT: number = parseInt(process.env.PORT as string, 10);
const app = express();
app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(express.static(path.resolve("./") + "/client/dist/"));

app.get("/", (req, res) => {
  res.sendFile(path.resolve("./") + "/client/dist/");
});

app.use("/questions", questionsRouter);
app.use(errorHandler);
app.use(notFoundHandler);

/**
 * Webpack HMR Activation
 */

type ModuleId = string | number;

interface WebpackHotModule {
  hot?: {
    data: any;
    accept(
      dependencies: string[],
      callback?: (updatedDependencies: ModuleId[]) => void
    ): void;
    accept(dependency: string, callback?: () => void): void;
    accept(errHandler?: (err: Error) => void): void;
    dispose(callback: (data: any) => void): void;
  };
}

declare const module: WebpackHotModule;

if (module.hot) {
  module.hot.accept();
  module.hot.dispose(() => server.close());
}

const local_db = "mongodb://root:rude@localhost:27017/questions";
const url = process.env.MONGODB_URI || local_db;
mongoose
  .connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(async () => {
    await server; // Start the API
  })
  .catch((error: any) => console.error(error));

const server = app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
