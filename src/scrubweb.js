/*
 * scrubdev - Web Frontend for the Automation System Project.
 * Copyright (C) 2016 scrubdev (lead - Nicholas Tay <nexerq@gmail.com>)
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as published by
 * the Free Software Foundation, at version 3 of the License.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.

 * You should have received a copy of the GNU Affero General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
*/

import express from "express";
import chalk from "chalk";
import morgan from "morgan";
import path from "path";
import strftime from "fast-strftime";

import Logging from "./logging";

const PORT = 3000;

export default class Scrubweb {
    constructor() {
        this.app = null;
    }

    start() {
        if (this.app)
            return Logging.warn("SCRUB", "The server is already running!");

        Logging.log("SCRUB", "Starting web server");
        this.app = express();

        this.baseConfig();
        this.setupRoutes();
        this.startListen();
    }

    baseConfig() {
        morgan.token("myheader", () => { return `${chalk.magenta(`[${strftime("%l:%M%P")}]`)} ${chalk.cyan("<VServLog>")}` }) // the custom header to append
        this.app.use(morgan(":myheader :method :url :status :response-time ms - :res[content-length]"))

        this.app.set("view engine", "ejs");
        this.app.set("views", path.join(__dirname, "views"));
    }

    setupRoutes() {
        this.app.use("/static", express.static(path.join(__dirname, "public")));
        this.app.get("/", (req, res) => res.render("index"));
    }

    startListen() {
        this.app.listen(PORT, err => {
            if (err)
                return Logging.fatal(err);

            Logging.log("WebServer", `Listening on port ${PORT}`);
        });
    }
}