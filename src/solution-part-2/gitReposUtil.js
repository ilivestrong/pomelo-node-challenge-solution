const { Octokit } = require("@octokit/core");
const {
  REPO_NAME,
  RESULTS_PER_PAGE,
  TOTAL_PAGES
} = require("../appConfig");

const getPaginationLinks = () => {

  if (RESULTS_PER_PAGE < 0 || RESULTS_PER_PAGE > 100) {
    throw new Error("Sorry, Github support results per page between 1 - 100.");
  }

  if (TOTAL_PAGES < 0) {
    throw new Error("Invalid value provided for total pages.");
  }

  if (!REPO_NAME) {
    REPO_NAME = "nodejs";
  }

  let pageLinks = [];

  for (let pageNo = 1; pageNo <= TOTAL_PAGES; pageNo++) {
    pageLinks.push({ no: pageNo, link: `/repos/${pageNo}` });
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
  } catch (err) {
    console.log(err);
  }
  return repoList;
}

module.exports = {
  getPaginationLinks,
  fetchRepos
};