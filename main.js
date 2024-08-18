import { basename } from "path";
import { initRepos } from "./gitlab/create-repo.js";
import { addHook } from "./utils/add-hook.js";
import { addRemote } from "./utils/add-remote.js";
import { getAvailableReposBaseDir } from "./utils/find-repos.js";
import { remotePush } from "./utils/remote-push.js";

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
