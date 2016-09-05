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

import net from "net";

import Logging from "./logging";

export default class Sockets {
    constructor() {
        this.client = null;
    }

    connect() {
        Logging.log("Sockets", "Attempting connection to local sockets server on port 3069...");
        try {
            this.client = net.connect(3069, () => Logging.log("Sockets", "Connected to sockets server over port 3069."))
                .setEncoding("utf8")
                .on("error", e => this._handleErr(e))
                .on("close", () => this._handleErr());
        }
        catch (e) {
            this._handleErr(e);
        }
    }

    _handleErr(e) {
        if (e)
            Logging.warn("Sockets", "Sockets connection lost. Reason - " + e.stack || e);
        else
            Logging.warn("Sockets", "Connection sockets server closed. Retrying...");

        this.client = null;
        this.retry();
    }

    retry() {
        setTimeout(() => this.connect(), 1.5 * 60 * 1000);
    }
}