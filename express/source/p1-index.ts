import express, { Request, Response, NextFunction } from "express";
import { userRouter } from "./routers/user-router";
import { reimbursementRouter } from "./routers/reimbursement-router";
import bodyParser from "body-parser";

const app = express();

const port = 3001;
app.set("port", port);

/**
 * Log each request's method and url to the console.
 */
app.use((req: Request, resp: Response, next: NextFunction) => {
  console.log(`request was made with url: ${req.path} 
    and method: ${req.method}`);
  next();
});

app.use(bodyParser.json());

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, content-type, Accept"
  );
  res.header("Access-Control-Allow-Credentials", "true");
  next();
});

/*****************************************************************
 * Register Routers
 *****************************************************************/
app.use("/users", userRouter);
app.use("/reimbursements", reimbursementRouter);

app.listen(port, () => {
  console.log(`app is running at http://localhost:${app.get("port")}`);
});
