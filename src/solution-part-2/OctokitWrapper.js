const { Octokit } = require("@octokit/core");

module.exports.getOctokitInstance = (pat) => new Octokit({ auth: pat });