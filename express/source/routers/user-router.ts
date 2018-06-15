import express from "express";
import * as userService from "../services/user-service";
import { Request, Response, NextFunction } from "express";
export const userRouter = express.Router();

userRouter.post("/:username", (req: Request, resp, Response) => {
  const { username, password } = req.body;
  console.log("user info: ", req.body);
  console.log(`retrieving user with username ${username}`);
  userService
    .findUserByUsername(username)
    .then(data => {
      if (data.Items[0]) {
        if (password === data.Items[0].password) resp.json(data.Items);
        else resp.status(401).json({ error: "Passwords do not match" });
      } else resp.status(401).json({ error: "User Account does not exist" });
    })
    .catch(err => console.log("error on server: ", err));
});

userRouter.put("/:username", (req: Request, resp: Response) => {
  console.log(`modifying user ${JSON.stringify(req.body)}`);
  userService
    .update(req.body)
    .then(data => {
      resp.json(data);
    })
    .catch(err => {
      resp.sendStatus(500);
    });
});

userRouter.post("", (req: Request, resp: Response) => {
  userService
    .findUserByUsername(req.body.username)
    .then(data => {
      console.log(data.Items);
      if (!req.body.username || !req.body.password) {
        resp.sendStatus(401);
      } else {
        createIt();
        resp.sendStatus(201);
      }
    })
    .catch(err => {
      resp.sendStatus(500);
    });

  function createIt() {
    const newUser = {
      username: req.body.username,
      password: req.body.password,
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      role: req.body.role
    };
    console.log(`adding user ${JSON.stringify(req.body)} to users`);
    userService
      .saveUser(newUser)
      .then(data => {
        resp.json(data.Items);
      })
      .catch(err => {
        resp.sendStatus(500);
      });
  }
});
