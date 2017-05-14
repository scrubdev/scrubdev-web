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