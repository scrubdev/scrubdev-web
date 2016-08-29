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

import strftime from "fast-strftime";
import chalk from "chalk";

export default class Logging {
    static log(moduleName, content) {
        console.log(chalk.magenta(`[${strftime("%I:%M%P")}]`), `${chalk.cyan(`<${moduleName}>`)} ${content}`);
    }

    static success(moduleName, content) {
        this.log(moduleName, chalk.green("✓ <SUCCESS> " + content));
    }

    static warn(moduleName, content) {
        this.log(moduleName, chalk.yellow("! <WARN> " + content));
    }

    static fatal(moduleName, content) {
        this.log(moduleName, chalk.red("✗ <FATAL> " + content));
        process.exit(1);
    }
}