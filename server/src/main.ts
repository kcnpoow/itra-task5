import express from "express";
import cors from "cors";
import "dotenv/config";

import { errorMiddleware } from "./middlewares/error.middleware";

const PORT = process.env.PORT || 3000;
const CLIENT_URL = process.env.CLIENT_URL;

const app = express();

app.use(
  cors({
    origin: CLIENT_URL,
  }),
);
app.use(express.json());
app.use(errorMiddleware);

app.listen(PORT, (error?: Error) => {
  if (error) {
    console.error("Failed to start server:", error);
  } else {
    console.info(`Server listening on port ${PORT}`);
  }
});
