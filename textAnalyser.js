import lineReaderSync from "line-reader-sync";

export const analyse = path => {
  const lineReader = new lineReaderSync(path);

  // remove eol terminator
  const prepareLines = () => {
    const arrayOfLines = lineReader.toLines();

    const trimmedLines = arrayOfLines.map((line, index) => {
      if (index !== arrayOfLines.length - 1) {
        line = line.substring(0, line.length - 1);
      }
      return line;
    });
    return trimmedLines;
  };

  const countEmptyLines = lines => {
    const emptyLines = lines.filter(line => line.length === 0).length;
    return emptyLines;
  };

  const countWords = lines => {
    let linesAsArray = lines.join(" ");
    linesAsArray = linesAsArray.replace("  ", " ");
    linesAsArray = linesAsArray.split(" ");
    let preparedArray = linesAsArray.filter(line => line.length !== 0);
    return preparedArray.length;
  };

  const countSigns = lines => {
    let signs = 0;
    const arrayOfSigns = lines.join("").split("");
    for (let letter of arrayOfSigns) {
      if (letter !== " ") signs++;
    }
    return signs;
  };

  const countSpaces = lines => {
    let spaces = 0;
    for (let line of lines) {
      if (line.length !== 0) {
        let spacesColection = line.split("").filter(item => item === " ");
        spaces += spacesColection.length;
      }
    }
    return spaces;
  };

  const getInfo = () => {
    const lines = prepareLines();
    const info = {
      signs: countSigns(lines),
      spaces: countSpaces(lines),
      words: countWords(lines),
      lines: lines.length,
      emptyLines: countEmptyLines(lines),
      notEmptyLines: lines.length - countEmptyLines(lines)
    };
    return info;
  };

  return getInfo();
};

export default analyse;
