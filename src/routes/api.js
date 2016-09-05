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

const ApiRouter = express.Router();

ApiRouter.get("/", (req, res) => res.send("scrubdev alpha v0.1 - api<br><br>you think you're so cool that you reached here, didn't you?"));
ApiRouter.get("/alive", (req, res) => res.json({ alive: !!Scrubweb.sockets.client }));

export default ApiRouter;