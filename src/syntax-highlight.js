// Welcome to Regex Hell. "Enjoy" your stay 😈.

import chalk from "chalk";

export const javascript = (str) => {
  return (
    str
      .replace(/[+-]?(\d*\.)?\d+/g, (c) => chalk.yellow(c)) // numbers
      .replace(/(?=.)[a-zA-Z0-9_]*?(?=\()/g, (c) => chalk.blueBright(c)) //  functions
      .replace(/(?=)[a-zA-Z0-9_]*?(?=\.)/gs, (c) => chalk.hex("#E5C07B")(c)) // classes/namespaces/modules
      // .replace(/(?<=\.).*(?=\()/g, (c) => chalk.blue(c))
      // .replace(/(?<=\D)\D*?(?=\.)/gs, (c) => chalk.yellowBright(c))
      .replace(/([!%^&*-+=~><]?)|\\./g, (c) => chalk.cyan(c)) // operators
      .replace(
        /[\s()](const|get|set|var|let|if|class|for|else|function|import|from|return|as|new|await|\=\>)[\s()]/g,
        (c) => chalk.magentaBright(c)
      )
      .replace(/["'`](.*?)["'`]/g, (c) => chalk.green(c)) // strings
      .replace(/\/\/ .*/gs, (c) => chalk.gray.italic(c)) // coments
  );
  // .replace(//g, (c) => chalk.cyan(c));
};

export const python = (str) =>
  str
    .replace(/[+-]?(\d*\.)?\d+/g, (c) => chalk.yellow(c)) // numbers
    .replace(/(?=.)[a-zA-Z0-9_]*?(?=(\())/g, (c) => chalk.blueBright(c)) // functions
    // .replace(/(?=.)[a-zA-Z0-9_]*?(?=(\s?=\s?))/g, (c) => chalk.red(c)) // variables
    .replace(/(?=)\S*?(?=\.)/gs, (c) => chalk.hex("#E5C07B")(c)) // classes/namespaces/modules
    .replace(/([%!^&*-+=/~><]?)|\\./g, (c) => chalk.cyan(c)) // operators
    .replace(/["'](.*?)["']/g, (c) => chalk.green(c)) // strings
    .replace(
      /def|class|for|if|elif|return|else|import|[\s()]in[\s()]|[\s()]as[\s()]|[\s()]and[\s()]|[\s()]or[\s()]|\snot/,
      (c) => chalk.magentaBright(c)
    )
    .replace(/\#.*/g, (c) => chalk.gray.italic(c)); // coments
