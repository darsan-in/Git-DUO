import { Gitlab } from "@gitbeaker/rest";

export async function initRepos(repoNames = []) {
  const api = new Gitlab({
    token: process.env.gitlab_api,
  });

  for (const repoName of repoNames) {
    await api.Projects.create({ name: repoName, visibility: "public" });

    //setting delay to avoid risk of getting mark you as spam.
    await new Promise((resolve) => {
      setTimeout(() => {
        resolve();
      }, 20_000);
    });
  }
}
