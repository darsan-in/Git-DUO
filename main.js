import { basename } from "path";
import { addHook } from "./add-hook.js";
import { addRemote } from "./add-remote.js";
import { getAvailableReposBaseDir } from "./find-repos.js";
import { initRepos } from "./gitlab/create-repo.js";
import { remotePush } from "./remote-push.js";

async function main() {
  const repoRoots = getAvailableReposBaseDir("A:/Git/darsan-in").filter(
    (repoRoot) => basename(repoRoot) !== ".github"
  );

  const repoNames = repoRoots.map((repoRoot) => basename(repoRoot));

  await initRepos(repoNames);
  addRemote(repoRoots);
  remotePush(repoRoots);

  addHook(repoRoots, "post-commit");
}

main();
