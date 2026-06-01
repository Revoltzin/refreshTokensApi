import cors from "cors";
import express from "express";

import { env } from "./config/env";
import { routes } from "./routes";

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(env.port, () => {
  console.log(`Server running on port ${env.port}`);
});

