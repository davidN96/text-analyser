import minimist from "minimist";
import colors from "colors";
import fs from "fs";
import readline from "readline";

const argv = minimist(process.argv.slice(2));

console.log(argv);
