const { Octokit } = require("@octokit/core");

const getPaginationLinks = () => {
  let pageLinks = [];

  for (let pageNo = 1; pageNo <= 10; pageNo++) {
    pageLinks.push({ no: pageNo, link: `/repos/${pageNo}` });
  }

  return pageLinks;
};

async function fetchRepos(repoName, currentPage = 1) {
  const octokit = new Octokit({ auth: `397a8141d1e20f9136d02f7381b294f688ad295d` });
  let repoList = [];
  try {
    const response = await octokit.request(
      `GET https://api.github.com/search/repositories?q=${repoName}&per_page=10&page=${currentPage}`,
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
  fetchRepos,
};