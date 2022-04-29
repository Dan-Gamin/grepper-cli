#!/usr/bin/env node

// Import Stuff
import { Command } from "commander";
import fs from "fs/promises";
import chalk from "chalk";

import { join } from "path";
import { projRoot } from "./config.js";

import RegisterSearchCmd from "./commands/search.js";

// Init Program
const program = new Command();

// Get Data
const packageData = JSON.parse(
  await fs.readFile(join(projRoot, "package.json"), "utf-8")
);

// Configure Program
program
  .name(Object.keys(packageData.bin)[0])
  .usage("[command] [options]")
  .description(packageData.description)
  .version(packageData.version)
  .addHelpCommand(false) // Just use --help lmao
  .helpOption("-h, --help", "Display help for the cli or given command")
  .showSuggestionAfterError()
  .configureOutput({
    // Highlight errors in color.
    outputError: (str, write) => write(chalk.redBright(str)),
  });

RegisterSearchCmd(program);

program.parse(process.argv);
