// import express from "express";
// import bodyParser from "body-parser";
// import morgan from "morgan";
// import cors from "cors";
// import { PORT } from "./config/constants";
// import mongoose from "mongoose";
// /**** Database ****/
// export const kittenDB = require("./question_db")(mongoose);
// /**** Configuration ****/
// const app = express();
// app.use(cors());
// app.use(bodyParser.json()); // Parse JSON from the request body
// app.use(morgan("combined")); // Log all requests to the console
// app.use(express.static("../client/build")); // Needed for serving production build of React

// /**** Start ****/
// const url =
//   process.env.MONGO_URL ||
//   "mongodb://heroku_h96hlslg:ap6lfu5h7aar88djijf3c9866g@ds235437.mlab.com:35437/heroku_h96hlslg";
// // "mongodb+srv://tajsonik:836Ce881b@cluster0-23gsy.mongodb.net/question_db?retryWrites=true&w=majority";
// mongoose
//   .connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
//   .then(async () => {
//     await kittenDB.bootstrap(); // Fill in test data if needed.
//     await app.listen(PORT); // Start the API
//     console.log(`Question API running on port ${PORT}!`);
//   })
//   .catch((error: any) => console.error(error));
