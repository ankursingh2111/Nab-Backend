import express from "express";
import cors from "cors";
import setupRoutesFor from "./routes";

const run = port => {
  const app = express();
  app.use(cors());
  setupRoutesFor(app);

  return new Promise(resolve => {
    const server = app.listen(port, () => {
      resolve(server);
    });
  });
};

export default run;

/* istanbul ignore next */
if (require.main === module) {
  run(8080);
}
