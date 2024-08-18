import { globSync } from "glob";
import { join } from "path";

export function getAvailableReposBaseDir(basePath = "A:/Git") {
  const reposDir = globSync("**/.git", {
    cwd: basePath,
    dot: true,
    absolute: true,
  }).map((path) => join(path, ".."));

  return reposDir;
}
