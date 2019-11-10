import { Router } from "express";
import get from "./src/controllers/api";

// API Controller
const apiRouter = Router();
apiRouter.get("/:service", get);

export default app => {
  app.use("/api", apiRouter);
};
