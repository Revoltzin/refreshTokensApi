import { Router } from "express";

export const routes = Router();

routes.get("/health", (_request, response) => {
  return response.json({ status: "ok" });
});

