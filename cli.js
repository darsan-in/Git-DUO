#! node

import { Command } from "commander";
import { main } from "./git-duo.js";
const program = new Command();

program
  .version("0.0.1")
  .description("CLI tool to work simultaneously with GitHub and GitLab")
  .argument("<repoName>", "Name of the repository to create")
  .option("-p, --private", "Make the repository private", false)
  .action((repoName, options) => {
    const { private: isPrivate } = options;

    main(repoName, isPrivate);
  });

program.parse(process.argv);
