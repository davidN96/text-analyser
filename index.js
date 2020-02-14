import minimist from "minimist";
import lineReader from "line-reader";
import colors from "colors";

const argv = minimist(process.argv.slice(2));
const pathToFile = argv.p || argv.path;

const textAnalyze = {
  spaces: 0,
  emptyLines: 0,
  lines: 0,
  signs: 0
};

lineReader.eachLine(pathToFile, (line, last) => {
  textAnalyze.lines++;
  if (line.length === 0) textAnalyze.emptyLines++;

  for (let i = 0; i < line.length; i++) {
    if (line.charAt(i) === " ") textAnalyze.spaces++;
    if (line.charAt(i) !== " ") textAnalyze.signs++;
  }

  if (last) console.log(textAnalyze);
});
