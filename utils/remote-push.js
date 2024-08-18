import { execSync } from "child_process";
import { appendFileSync } from "fs";
import { basename } from "path";

export function remotePush(repoBaseDirs = []) {
  repoBaseDirs.forEach((repoRoot) => {
    const command = `git push gitlab`;

    try {
      const res = execSync(command, { cwd: repoRoot });
      appendFileSync("push-report.txt", res.toString("utf8"));
    } catch (err) {
      console.log("Error pushing ", basename(repoRoot));
    }
  });
}
