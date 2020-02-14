import minimist from "minimist";
import colors from "colors";
import lineReaderSync from "line-reader-sync";

const argv = minimist(process.argv.slice(2));
const pathToFile = argv.p || argv.path;
const lineReader = new lineReaderSync(pathToFile);

const prepareLines = () => {
  const arrayOfLines = lineReader.toLines();

  const trimmedLines = arrayOfLines.map((line, index) => {
    if (index !== arrayOfLines.length - 1)
      line = line.substring(0, line.length - 1);
    return line;
  });

  return trimmedLines;
};

const analyze = () => {
  console.log(trimmedLines);
};
analyze();
