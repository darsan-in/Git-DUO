#! node

import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

import { execSync } from "child_process";
import { copyFileSync, mkdirSync, rmSync } from "fs";
import { dirname, join } from "path";

import { Command } from "commander";
const program = new Command();

program
  .version("0.0.1")
  .description("CLI tool to work simultaneously with GitHub and GitLab")
  .argument("[path]", "Destination path for template", "")
  .action((path) => {
    setGitTemplate(path);
  });

program.parse(process.argv);

function setGitTemplate(templatePath = "") {
  const templateDestBaseRelative = "git-duo-template";
  const destHookPathRelative = `hooks/pre-push`;

  const userDir =
    process.platform === "win32"
      ? `C:/Users/${process.env.USERNAME}`
      : `/home/${process.env.USER}`;

  const templateBasePath = templatePath
    ? templatePath
    : join(userDir, templateDestBaseRelative);

  /* copy template to localuser dir*/
  const source = join(__dirname, "templates/git-duo/hooks/pre-push");

  const dest = join(templateBasePath, destHookPathRelative);

  rmSync(templateBasePath, { recursive: true, force: true });

  mkdirSync(dirname(dest), { recursive: true });

  copyFileSync(source, dest);

  /* set template */
  const command = `git config --global init.templateDir "${templateBasePath}"`;
  try {
    execSync(command);
  } catch (err) {
    console.log("Error setting git template");
  }

  console.log("Template added to ", templateBasePath);
}
