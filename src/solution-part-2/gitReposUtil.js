const { Octokit } = require("@octokit/core");
const {
  API_BASE,
  REPO_NAME,
  RESULTS_PER_PAGE,
  TOTAL_PAGES
} = require("../configs/appConfig");

const {
  errors: { github: githubErrors }
} = require("../configs/errorsConfig");

/**
 * Constructs a page link array based on config. These are used on UI to display pagination links.
 * @returns Array<{no:number, link: string}>
 */
const getPaginationLinks = () => {

  if (RESULTS_PER_PAGE < 0 || RESULTS_PER_PAGE > 100) {
    throw new Error(githubErrors.INVALID_RESULTS_PER_PAGE);
  }

  if (TOTAL_PAGES < 0) {
    throw new Error(githubErrors.INVALID_TOTAL_PAGES);
  }

  if (!REPO_NAME) {
    REPO_NAME = "nodejs";
  }

  let pageLinks = [];

  for (let pageNo = 1; pageNo <= TOTAL_PAGES; pageNo++) {
    pageLinks.push({ no: pageNo, link: `/${API_BASE}/repos/${pageNo}` });
  }
  return pageLinks;
};

async function fetchRepos(repoName, currentPage = 1) {
  const octokit = new Octokit({ auth: `397a8141d1e20f9136d02f7381b294f688ad295d` });
  let repoList = [];
  try {
    const response = await octokit.request(
      `GET https://api.github.com/search/repositories?q=${REPO_NAME}&per_page=${RESULTS_PER_PAGE}&page=${currentPage}`,
      {
        headers: {
          "User-Agent": "gitreposdemo",
          "accept": "application/vnd.github.v3+json"
        },
      }
    );
    repoList = response.data.items;
  } catch (e) {
    console.log(`Fetch Repo: ${e}`);
    return new Error(e);
  }
  return repoList;
}

module.exports = {
  getPaginationLinks,
  fetchRepos
};