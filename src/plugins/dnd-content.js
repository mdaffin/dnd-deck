import YAML from "yaml";
import axios from "axios";
import { Octokit } from "@octokit/rest";
let octokit;

if (process.server) {
  octokit = new Octokit({
    auth: process.env["GITHUB_TOKEN"],
  });
} else {
  octokit = new Octokit();
}

// TODO make these configuable and support multiple repos
const owner = "mdaffin";
const repo = "dnd-deck";

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

const loadAll = (path, collection) => async () => {
  const response = await octokit.repos.getContent({
    owner,
    repo,
    path: `${path}/${collection}`,
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
};

const loadSingle = (path, collection) => async (name) => {
  const download_url = `${path}/${collection}/${name}.yaml`;
  console.log(`download_URL: ${download_url}`);
  const response = await axios.get(download_url);
  const data = YAML.parse(response.data);
  return {
    ...data,
    path: `${collection}/${name}`,
  };
};

export default ({ app }) => {
  app.races = loadAll("src/content", "races");
  app.race = loadSingle(
    `https://raw.githubusercontent.com/${owner}/${repo}/master/src/content`,
    "races"
  );
  app.characters = loadAll("src/content", "characters");
  app.character = loadSingle(
    `https://raw.githubusercontent.com/${owner}/${repo}/master/src/content`,
    "characters"
  );
  app.charClasses = loadAll("src/content", "classes");
  app.charClass = loadSingle(
    `https://raw.githubusercontent.com/${owner}/${repo}/master/src/content`,
    "classes"
  );
};
