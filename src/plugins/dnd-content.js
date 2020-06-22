import YAML from "yaml";
import axios from "axios";
import { Octokit } from "@octokit/rest";

// TODO support branches
class GitHubContent {
  constructor(owner, repo, path, token = null) {
    this.owner = owner;
    this.repo = repo;
    this.path = path;
    this.octokit = new Octokit({ auth: token });
  }

  async loadAll(collection) {
    const response = await this.octokit.repos.getContent({
      owner: this.owner,
      repo: this.repo,
      path: `${this.path}/${collection}`,
    });
    logRateLimit(response);
    return Promise.all(
      response.data.map(async ({ name, download_url }) => {
        const response = await axios.get(download_url);
        const data = YAML.parse(response.data);
        return {
          ...data,
          path: `${collection}/${name.substring(0, name.lastIndexOf("."))}`,
        };
      })
    );
  }

  async loadSingle(collection, name) {
    const url = `https://raw.githubusercontent.com/${this.owner}/${this.repo}/master/${this.path}/${collection}/${name}.yaml`;
    const response = await axios.get(url);
    return {
      ...YAML.parse(response.data),
      path: `${collection}/${name}`,
    };
  }
}

const logRateLimit = (response) => {
  const rateLimit = response.headers["x-ratelimit-remaining"];
  const rateLimitReset = (
    (new Date(response.headers["x-ratelimit-reset"] * 1000) - new Date()) /
    1000 /
    60
  ).toFixed(2);
  console.log(
    `Github rate limit remaining: ${rateLimit} resets in ${rateLimitReset} min`
  );
};

export default ({ app }) => {
  // TODO make these configuable and support multiple repos
  const owner = "mdaffin";
  const repo = "dnd-deck";
  const path = "src/content";

  let token;
  if (process.server) {
    token = process.env["GITHUB_TOKEN"];
  }

  const githubContent = new GitHubContent(owner, repo, path, token);
  app.races = () => githubContent.loadAll("races");
  app.characters = () => githubContent.loadAll("characters");
  app.charClasses = () => githubContent.loadAll("classes");

  app.race = (name) => githubContent.loadSingle("races", name);
  app.character = (name) => githubContent.loadSingle("characters", name);
  app.charClass = (name) => githubContent.loadSingle("classes", name);
};
