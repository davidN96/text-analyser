import minimist from "minimist";
import colors from "colors";
import lineReaderSync from "line-reader-sync";

const argv = minimist(process.argv.slice(2));
const pathToFile = argv.p || argv.path;

const textAnalyze = {
  spaces: 0,
  emptyLines: 0,
  lines: 0,
  signs: 0
};
