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
    let linesAsString = lines.join(" ");
    linesAsString = linesAsString.replace("  ", " ");
    linesAsString = linesAsString.split(" ");
    console.log(linesAsString);
    return linesAsString.length;
  };

  const countSigns = lines => {
    const stringWithChars = lines.join("").replace(" ", "");
    return stringWithChars.length;
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
