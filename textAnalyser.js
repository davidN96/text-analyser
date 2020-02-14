import minimist from "minimist";
import lineReaderSync from "line-reader-sync";

export const analyse = path => {
  const lineReader = new lineReaderSync(path);

  const prepareLines = () => {
    const arrayOfLines = lineReader.toLines();

    const trimmedLines = arrayOfLines.map((line, index) => {
      if (index !== arrayOfLines.length - 1)
        line = line.substring(0, line.length - 1);
      return line;
    });

    return trimmedLines;
  };

  const countEmptyLines = lines => {
    const emptyLines = lines.filter(line => line.length === 0).length;
    return emptyLines;
  };

  const getInfo = () => {
    const lines = prepareLines();
    const info = {
      signs: 0,
      spaces: 0,
      emptyLines: countEmptyLines(lines),
      lines: lines.length
    };

    for (let line of lines) {
      for (let i = 0; i < line.length; i++) {
        if (line.charAt(i) === " ") info.spaces++;
        else info.signs++;
      }
    }
    return info;
  };

  return getInfo();
};

export default analyse;
