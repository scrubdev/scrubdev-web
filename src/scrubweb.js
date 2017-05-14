import http from "http";
import express from "express";
import io from "socket.io"
import chalk from "chalk";
import morgan from "morgan";
import path from "path";
import strftime from "fast-strftime";

import Logging from "./logging";
import Sockets from "./sockets";

import ApiRouter from "./routes/api";

const PORT = 3000;

export default class Scrubweb {
    constructor() {
        if (global.Scrubweb)
            throw new Error("Scrubweb already running, destroy existing instance first from global.");

        global.Scrubweb = this;
        this.app = null;
    }

    start() {
        if (this.app)
            return Logging.warn("SCRUB", "The server is already running!");

        Logging.log("SCRUB", "Starting web server");
        this.app = express();
        this.http = http.Server(this.app);
        this.socketio = io(this.http);
        this.sockets = null;

        this.baseConfig();
        this.setupRoutes();
        this.startSockets();
        this.attachSocketIO();
        this.startListen();
    }

    baseConfig() {
        morgan.token("myheader", () => { return `${chalk.magenta(`[${strftime("%l:%M%P")}]`)} ${chalk.cyan("<VServLog>")}` }) // the custom header to append
        this.app.use(morgan(":myheader :remote-addr - :remote-user :method :url :status :response-time ms - :res[content-length]"))

        this.app.set("view engine", "ejs");
        this.app.set("views", path.join(__dirname, "views"));
    }

    setupRoutes() {
        this.app.use("/static", express.static(path.join(__dirname, "public")));
        this.app.get("/", (req, res) => res.render("index"));
        this.app.use("/api", ApiRouter);
    }

    startSockets() {
        this.sockets = new Sockets();
        this.sockets.connect();
    }

    attachSocketIO() {
        // this.app.get("/emit", (req, res) => {
        //     this.socketio.emit("scrubdev.test", "badum tss");
        //     res.text("lemaou");
        // });

        this.socketio.on("connection", socket => {
            Logging.log("socket.io", "socket connected");
        });
    }

    startListen() {
        this.http.listen(PORT, err => {
            if (err)
                return Logging.fatal(err);

            Logging.log("WebServer", `Listening on port ${PORT}`);
        });
    }
}