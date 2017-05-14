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