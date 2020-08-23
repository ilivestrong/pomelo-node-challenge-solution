const { getOctokitInstance } = require("./OctokitWrapper");
const {
  API_BASE,
  GITHUB_PERSONAL_ACCESS_TOKEN,
  RESULTS_PER_PAGE,
  REPO_NAME,
  TOTAL_PAGES
} = require("../configs/appConfig");

const {
  errors: { github: githubErrors }
} = require("../configs/errorsConfig");

const { GITHUB_REPO_SEARCH_BASE } = require("../configs/appConfig.js");

/**
 * Constructs a page link array based on config. These are used on UI to display pagination links.
 * @returns Array<{no:number, link: string}>
 */
const getPaginationLinks = () => {

  if (!RESULTS_PER_PAGE || RESULTS_PER_PAGE > 100) {
    throw new Error(githubErrors.INVALID_RESULTS_PER_PAGE);
  }

  if (!TOTAL_PAGES || TOTAL_PAGES < 0) {
    throw new Error(githubErrors.INVALID_TOTAL_PAGES);
  }

  let pageLinks = [];

  for (let pageNo = 1; pageNo <= TOTAL_PAGES; pageNo++) {
    pageLinks.push({ no: pageNo, link: `/${API_BASE}/repos/${pageNo}` });
  }
  return pageLinks;
};

async function fetchRepos(repoName = REPO_NAME, currentPage = 1) {
  let repoList = [];
  try {
    const octokit = getOctokitInstance(GITHUB_PERSONAL_ACCESS_TOKEN);
    const response = await octokit.request(
      `GET ${GITHUB_REPO_SEARCH_BASE}?q=${repoName}&per_page=${RESULTS_PER_PAGE}&page=${currentPage}`,
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