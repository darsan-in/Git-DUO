import { readFileSync, writeFileSync } from "fs";
import { basename, join } from "path";

export function addHook(reposBaseDir = [], hookSource = "post-commit") {
  const relHookPath = `.git/hooks/${basename(hookSource)}`;
  const hookContent = readFileSync(hookSource, { encoding: "utf8" });

  const hooksPath = reposBaseDir.map((repoRoot) => {
    return join(repoRoot, relHookPath);
  });

  hooksPath.forEach((hookPath) => {
    writeFileSync(hookPath, hookContent, { encoding: "utf8" });
  });

  writeFileSync(
    "hook-report.json",
    JSON.stringify(
      { repoCount: hooksPath.length, hooksPath: hooksPath },
      null,
      2
    )
  );
}
