import express from "express";

const ApiRouter = express.Router();

ApiRouter.get("/", (req, res) => res.send("scrubdev alpha v0.1 - api<br><br>you think you're so cool that you reached here, didn't you?"));
ApiRouter.get("/alive", (req, res) => res.json({ alive: !!Scrubweb.sockets.client }));

export default ApiRouter;