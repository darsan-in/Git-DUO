import { execSync } from "child_process";
import { basename } from "path";

export function addRemote(repoBaseDirs = []) {
  repoBaseDirs.forEach((repoRoot) => {
    const repoName = basename(repoRoot);

    const command = `git remote add gitlab https://gitlab.com/darsan.in/${repoName}.git`;

    try {
      execSync(command, { cwd: repoRoot });
    } catch (err) {
      console.log(err);
      console.log("Error adding remote url to ", repoName);
    }
  });
}
