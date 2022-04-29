#!/usr/bin/env node

// Import Stuff
import { Command } from "commander";
import RegisterSearchCmd from "./commands/search.js";
import fs from "fs/promises";
import chalk from "chalk";

// Init Program
const program = new Command();

// Get Data
const packageData = JSON.parse(await fs.readFile("package.json", "utf-8"));

program
  .name(packageData.name)
  .usage("[command] [options]")
  .description(packageData.description)
  .version(packageData.version)
  .addHelpCommand(false) // Just use --help lmao
  .showSuggestionAfterError()
  .configureOutput({
    // Highlight errors in color.
    outputError: (str, write) => write(chalk.redBright(str)),
  });

RegisterSearchCmd(program);

program.helpOption("-h, --help", "Display help for the cli or given command");
program.configureHelp({
  // subcommandTerm: (cmd) => cmd.name(),
});

program.parse(process.argv);
