#! node

import { execSync } from "child_process";
import { appendFileSync } from "fs";
import { join } from "path";

async function initRepo(repoName, isPrivate = false) {
  const { Gitlab } = await import("@gitbeaker/rest");
  const { Octokit } = await import("@octokit/rest");

  const gitlab = new Gitlab({
    token: process.env.gitlab_token,
  });
  const github = new Octokit({ auth: process.env.github_token });

  const gitlabResponse = await gitlab.Projects.create({
    name: repoName,
    visibility: isPrivate ? "private" : "public",
  });

  const githubResponse = await github.repos.createForAuthenticatedUser({
    name: repoName,
    private: isPrivate,
  });

  return {
    primaryGitRemote: githubResponse.data.clone_url,
    secondaryGitRemote: gitlabResponse.http_url_to_repo,
  };
}

function clonePrimaryRemote(remoteLink) {
  const command = `git clone ${remoteLink}`;

  try {
    execSync(command, { cwd: process.cwd() });
  } catch (err) {
    logWriter(err);
    console.log("Error cloning primary remote repo.\nCheck log for more.");
  }
}

function addSecondaryRemote(remoteLink, repoRoot) {
  const command = `git remote add gitlab ${remoteLink}`;

  try {
    execSync(command, { cwd: repoRoot });
  } catch (err) {
    logWriter(err);
    console.log("Error adding secondary remote link.\nCheck log for more.");
  }
}

export function main(repoName, isPrivate = false) {
  initRepo(repoName, isPrivate)
    .then(({ primaryGitRemote, secondaryGitRemote }) => {
      console.log(primaryGitRemote, "\n", secondaryGitRemote);
      clonePrimaryRemote(primaryGitRemote);

      const repoRoot = join(process.cwd(), repoName);
      addSecondaryRemote(secondaryGitRemote, repoRoot);
    })
    .catch((err) => {
      logWriter(err);
      console.log("Error creating repos.\nCheck log for more.");
    });
}

function logWriter(err) {
  appendFileSync("git-duo-log.txt", err.toString() + "\n", {
    encoding: "utf8",
  });
}
