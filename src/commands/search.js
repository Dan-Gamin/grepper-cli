import { searchQuery, parseLanguage } from "../config.js";
import * as highlight from "../syntax-highlight.js";
import chalk from "chalk";
import axios from "axios";

/**
 * @param  {Command} program
 *///
export default (program) => {
  program
    .command("search")
    .alias("s")
    .description("Searches a given query.")
    .usage("<query> [options]")
    .argument("<query>", "Search Query.")
    .option("-l, --language <lang>", "Language of the code.")
    .option(
      "-a, --amount <of results>",
      "The number of results to be returned.",
      3
    )
    .option("-r, --raw, --json", "Prints API results in json form.")
    .action(async (q, options) => {
      let resWithLang = options.language
        ? axios.get(searchQuery(`${q} in ${parseLanguage(options.language)}`))
        : null;
      let res = axios.get(searchQuery(q));

      [res, resWithLang] = await Promise.all([res, resWithLang]);

      if (options.raw) {
        console.log(res.data);
        return;
      }

      if (options.language) {
        let check = new Set();
        res.data["answers"] = [
          ...res.data["answers"],
          ...resWithLang.data["answers"],
        ].filter((v) => {
          return (
            v.language == parseLanguage(options.language) &&
            !check.has(v["id"]) &&
            check.add(v["id"])
          );
        });
      }

      if (res.data["answers"].length == 0) {
        program.error("\nNo results found.");
        return;
      }

      if (options.amount < 0) {
        options.amount = res.data["answers"].length;
      }

      console.log(
        chalk.bold(
          `Showing ${options.amount}/${res.data["answers"].length} results for "${q}":`
        )
      );

      res.data["answers"]
        .filter((_, i) => i < parseInt(options.amount))
        .reverse()
        .forEach((ans) => {
          console.log(
            chalk.whiteBright(
              `\n${ans.language.replace(/^\w/, (c) =>
                c.toUpperCase()
              )} answer with ${ans.t_upvotes} Upvotes. (Posted on ${(() => {
                let dateElements = ans.created_at.split(" ")[0].split("-");
                let date = new Date(
                  dateElements[0],
                  dateElements[1] - 1,
                  dateElements[2]
                );
                return date.toLocaleDateString();
              })()}) (ID: ${ans.id})`
            )
          );
          ans.answer.split("\n").forEach((line) => {
            console.log(
              ans.language in highlight
                ? highlight[ans.language](`   ${line}`)
                : `   ${line}`
            );
          });
        });
    });
};
