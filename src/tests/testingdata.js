const NodeJSRepoSampleResponse = {
  headers: {
    'access-control-allow-origin': '*',
    'access-control-expose-headers': 'ETag, Link, Location, Retry-After, X-GitHub-OTP, X-RateLimit-Limit, ' +
      'X-RateLimit-Remaining, X-RateLimit-Reset, X-OAuth-Scopes, ' +
      'X-Accepted-OAuth-Scopes, X-Poll-Interval, X-GitHub-Media-Type, ' +
      'Deprecation, Sunset',
    'cache-control': 'no-cache',
    connection: 'close',
    'content-encoding': 'gzip',
    'content-security-policy': "default-src 'none'",
    'content-type': 'application/json; charset=utf-8',
    date: 'Sun, 23 Aug 2020 19:41:20 GMT',
    link: '<https://api.github.com/search/repositories?q=nodejs&per_page=10&page=9>; ' +
      'rel="prev", ' +
      '<https://api.github.com/search/repositories?q=nodejs&per_page=10&page=11>; ' +
      'rel="next", ' +
      '<https://api.github.com/search/repositories?q=nodejs&per_page=10&page=100>; ' +
      'rel="last", ' +
      '<https://api.github.com/search/repositories?q=nodejs&per_page=10&page=1>; ' +
      'rel="first"',
    'referrer-policy': 'origin-when-cross-origin, strict-origin-when-cross-origin',
    server: 'GitHub.com',
    status: '200 OK',
    'strict-transport-security': 'max-age=31536000; includeSubdomains; preload',
    'transfer-encoding': 'chunked',
    vary: 'Accept-Encoding, Accept, X-Requested-With, Accept-Encoding',
    'x-accepted-oauth-scopes': '',
    'x-content-type-options': 'nosniff',
    'x-frame-options': 'deny',
    'x-github-media-type': 'github.v3; format=json',
    'x-github-request-id': 'FB57:16C1:B0A113:EB41F2:5F42C65F',
    'x-oauth-scopes': 'repo',
    'x-ratelimit-limit': '30',
    'x-ratelimit-remaining': '29',
    'x-ratelimit-reset': '1598211740',
    'x-xss-protection': '1; mode=block'
  },
  status: "200",
  url: "https://api.github.com/search/repositories?q=nodejs&per_page=10&page=10",
  data: {
    items: [{
      id: 57147445,
      node_id: 'MDEwOlJlcG9zaXRvcnk1NzE0NzQ0NQ==',
      name: 'quickstart-nodejs',
      full_name: 'firebase/quickstart-nodejs',
      private: false,
      owner: {
        login: 'firebase',
        id: 1335026,
        node_id: 'MDEyOk9yZ2FuaXphdGlvbjEzMzUwMjY=',
        avatar_url: 'https://avatars2.githubusercontent.com/u/1335026?v=4',
        gravatar_id: '',
        url: 'https://api.github.com/users/firebase',
        html_url: 'https://github.com/firebase',
        followers_url: 'https://api.github.com/users/firebase/followers',
        following_url: 'https://api.github.com/users/firebase/following{/other_user}',
        gists_url: 'https://api.github.com/users/firebase/gists{/gist_id}',
        starred_url: 'https://api.github.com/users/firebase/starred{/owner}{/repo}',
        subscriptions_url: 'https://api.github.com/users/firebase/subscriptions',
        organizations_url: 'https://api.github.com/users/firebase/orgs',
        repos_url: 'https://api.github.com/users/firebase/repos',
        events_url: 'https://api.github.com/users/firebase/events{/privacy}',
        received_events_url: 'https://api.github.com/users/firebase/received_events',
        type: 'Organization',
        site_admin: false
      },
      html_url: 'https://github.com/firebase/quickstart-nodejs',
      description: null,
      fork: false,
      url: 'https://api.github.com/repos/firebase/quickstart-nodejs',
      forks_url: 'https://api.github.com/repos/firebase/quickstart-nodejs/forks',
      keys_url: 'https://api.github.com/repos/firebase/quickstart-nodejs/keys{/key_id}',
      collaborators_url: 'https://api.github.com/repos/firebase/quickstart-nodejs/collaborators{/collaborator}',
      teams_url: 'https://api.github.com/repos/firebase/quickstart-nodejs/teams',
      hooks_url: 'https://api.github.com/repos/firebase/quickstart-nodejs/hooks',
      issue_events_url: 'https://api.github.com/repos/firebase/quickstart-nodejs/issues/events{/number}',
      events_url: 'https://api.github.com/repos/firebase/quickstart-nodejs/events',
      assignees_url: 'https://api.github.com/repos/firebase/quickstart-nodejs/assignees{/user}',
      branches_url: 'https://api.github.com/repos/firebase/quickstart-nodejs/branches{/branch}',
      tags_url: 'https://api.github.com/repos/firebase/quickstart-nodejs/tags',
      blobs_url: 'https://api.github.com/repos/firebase/quickstart-nodejs/git/blobs{/sha}',
      git_tags_url: 'https://api.github.com/repos/firebase/quickstart-nodejs/git/tags{/sha}',
      git_refs_url: 'https://api.github.com/repos/firebase/quickstart-nodejs/git/refs{/sha}',
      trees_url: 'https://api.github.com/repos/firebase/quickstart-nodejs/git/trees{/sha}',
      statuses_url: 'https://api.github.com/repos/firebase/quickstart-nodejs/statuses/{sha}',
      languages_url: 'https://api.github.com/repos/firebase/quickstart-nodejs/languages',
      stargazers_url: 'https://api.github.com/repos/firebase/quickstart-nodejs/stargazers',
      contributors_url: 'https://api.github.com/repos/firebase/quickstart-nodejs/contributors',
      subscribers_url: 'https://api.github.com/repos/firebase/quickstart-nodejs/subscribers',
      subscription_url: 'https://api.github.com/repos/firebase/quickstart-nodejs/subscription',
      commits_url: 'https://api.github.com/repos/firebase/quickstart-nodejs/commits{/sha}',
      git_commits_url: 'https://api.github.com/repos/firebase/quickstart-nodejs/git/commits{/sha}',
      comments_url: 'https://api.github.com/repos/firebase/quickstart-nodejs/comments{/number}',
      issue_comment_url: 'https://api.github.com/repos/firebase/quickstart-nodejs/issues/comments{/number}',
      contents_url: 'https://api.github.com/repos/firebase/quickstart-nodejs/contents/{+path}',
      compare_url: 'https://api.github.com/repos/firebase/quickstart-nodejs/compare/{base}...{head}',
      merges_url: 'https://api.github.com/repos/firebase/quickstart-nodejs/merges',
      archive_url: 'https://api.github.com/repos/firebase/quickstart-nodejs/{archive_format}{/ref}',
      downloads_url: 'https://api.github.com/repos/firebase/quickstart-nodejs/downloads',
      issues_url: 'https://api.github.com/repos/firebase/quickstart-nodejs/issues{/number}',
      pulls_url: 'https://api.github.com/repos/firebase/quickstart-nodejs/pulls{/number}',
      milestones_url: 'https://api.github.com/repos/firebase/quickstart-nodejs/milestones{/number}',
      notifications_url: 'https://api.github.com/repos/firebase/quickstart-nodejs/notifications{?since,all,participating}',
      labels_url: 'https://api.github.com/repos/firebase/quickstart-nodejs/labels{/name}',
      releases_url: 'https://api.github.com/repos/firebase/quickstart-nodejs/releases{/id}',
      deployments_url: 'https://api.github.com/repos/firebase/quickstart-nodejs/deployments',
      created_at: '2016-04-26T17:14:58Z',
      updated_at: '2020-08-18T09:02:33Z',
      pushed_at: '2020-08-22T20:59:46Z',
      git_url: 'git://github.com/firebase/quickstart-nodejs.git',
      ssh_url: 'git@github.com:firebase/quickstart-nodejs.git',
      clone_url: 'https://github.com/firebase/quickstart-nodejs.git',
      svn_url: 'https://github.com/firebase/quickstart-nodejs',
      homepage: null,
      size: 1736,
      stargazers_count: 736,
      watchers_count: 736,
      language: 'JavaScript',
      has_issues: true,
      has_projects: true,
      has_downloads: true,
      has_wiki: true,
      has_pages: false,
      forks_count: 400,
      mirror_url: null,
      archived: false,
      disabled: false,
      open_issues_count: 10,
      license: {
        key: 'apache-2.0',
        name: 'Apache License 2.0',
        spdx_id: 'Apache-2.0',
        url: 'https://api.github.com/licenses/apache-2.0',
        node_id: 'MDc6TGljZW5zZTI='
      },
      forks: 400,
      open_issues: 10,
      watchers: 736,
      default_branch: 'master',
      permissions: { admin: false, push: false, pull: true },
      score: 1
    }]
  }
}

const GraphQLRepoSampleResponse = {
  id: 54419932,
  node_id: 'MDEwOlJlcG9zaXRvcnk1NDQxOTkzMg==',
  name: 'graphql-spring-boot',
  full_name: 'yandooo/graphql-spring-boot',
  private: false,
  owner: {
    login: 'yandooo',
    id: 19685706,
    node_id: 'MDQ6VXNlcjE5Njg1NzA2',
    avatar_url: 'https://avatars3.githubusercontent.com/u/19685706?v=4',
    gravatar_id: '',
    url: 'https://api.github.com/users/yandooo',
    html_url: 'https://github.com/yandooo',
    followers_url: 'https://api.github.com/users/yandooo/followers',
    following_url: 'https://api.github.com/users/yandooo/following{/other_user}',
    gists_url: 'https://api.github.com/users/yandooo/gists{/gist_id}',
    starred_url: 'https://api.github.com/users/yandooo/starred{/owner}{/repo}',
    subscriptions_url: 'https://api.github.com/users/yandooo/subscriptions',
    organizations_url: 'https://api.github.com/users/yandooo/orgs',
    repos_url: 'https://api.github.com/users/yandooo/repos',
    events_url: 'https://api.github.com/users/yandooo/events{/privacy}',
    received_events_url: 'https://api.github.com/users/yandooo/received_events',
    type: 'User',
    site_admin: false
  },
  html_url: 'https://github.com/yandooo/graphql-spring-boot',
  description: 'GraphQL and GraphiQL Spring Framework Boot Starters',
  fork: false,
  url: 'https://api.github.com/repos/yandooo/graphql-spring-boot',
  forks_url: 'https://api.github.com/repos/yandooo/graphql-spring-boot/forks',
  keys_url: 'https://api.github.com/repos/yandooo/graphql-spring-boot/keys{/key_id}',
  collaborators_url: 'https://api.github.com/repos/yandooo/graphql-spring-boot/collaborators{/collaborator}',
  teams_url: 'https://api.github.com/repos/yandooo/graphql-spring-boot/teams',
  hooks_url: 'https://api.github.com/repos/yandooo/graphql-spring-boot/hooks',
  issue_events_url: 'https://api.github.com/repos/yandooo/graphql-spring-boot/issues/events{/number}',
  events_url: 'https://api.github.com/repos/yandooo/graphql-spring-boot/events',
  assignees_url: 'https://api.github.com/repos/yandooo/graphql-spring-boot/assignees{/user}',
  branches_url: 'https://api.github.com/repos/yandooo/graphql-spring-boot/branches{/branch}',
  tags_url: 'https://api.github.com/repos/yandooo/graphql-spring-boot/tags',
  blobs_url: 'https://api.github.com/repos/yandooo/graphql-spring-boot/git/blobs{/sha}',
  git_tags_url: 'https://api.github.com/repos/yandooo/graphql-spring-boot/git/tags{/sha}',
  git_refs_url: 'https://api.github.com/repos/yandooo/graphql-spring-boot/git/refs{/sha}',
  trees_url: 'https://api.github.com/repos/yandooo/graphql-spring-boot/git/trees{/sha}',
  statuses_url: 'https://api.github.com/repos/yandooo/graphql-spring-boot/statuses/{sha}',
  languages_url: 'https://api.github.com/repos/yandooo/graphql-spring-boot/languages',
  stargazers_url: 'https://api.github.com/repos/yandooo/graphql-spring-boot/stargazers',
  contributors_url: 'https://api.github.com/repos/yandooo/graphql-spring-boot/contributors',
  subscribers_url: 'https://api.github.com/repos/yandooo/graphql-spring-boot/subscribers',
  subscription_url: 'https://api.github.com/repos/yandooo/graphql-spring-boot/subscription',
  commits_url: 'https://api.github.com/repos/yandooo/graphql-spring-boot/commits{/sha}',
  git_commits_url: 'https://api.github.com/repos/yandooo/graphql-spring-boot/git/commits{/sha}',
  comments_url: 'https://api.github.com/repos/yandooo/graphql-spring-boot/comments{/number}',
  issue_comment_url: 'https://api.github.com/repos/yandooo/graphql-spring-boot/issues/comments{/number}',
  contents_url: 'https://api.github.com/repos/yandooo/graphql-spring-boot/contents/{+path}',
  compare_url: 'https://api.github.com/repos/yandooo/graphql-spring-boot/compare/{base}...{head}',
  merges_url: 'https://api.github.com/repos/yandooo/graphql-spring-boot/merges',
  archive_url: 'https://api.github.com/repos/yandooo/graphql-spring-boot/{archive_format}{/ref}',
  downloads_url: 'https://api.github.com/repos/yandooo/graphql-spring-boot/downloads',
  issues_url: 'https://api.github.com/repos/yandooo/graphql-spring-boot/issues{/number}',
  pulls_url: 'https://api.github.com/repos/yandooo/graphql-spring-boot/pulls{/number}',
  milestones_url: 'https://api.github.com/repos/yandooo/graphql-spring-boot/milestones{/number}',
  notifications_url: 'https://api.github.com/repos/yandooo/graphql-spring-boot/notifications{?since,all,participating}',
  labels_url: 'https://api.github.com/repos/yandooo/graphql-spring-boot/labels{/name}',
  releases_url: 'https://api.github.com/repos/yandooo/graphql-spring-boot/releases{/id}',
  deployments_url: 'https://api.github.com/repos/yandooo/graphql-spring-boot/deployments',
  created_at: '2016-03-21T20:21:28Z',
  updated_at: '2020-07-22T02:37:24Z',
  pushed_at: '2020-04-06T16:20:36Z',
  git_url: 'git://github.com/yandooo/graphql-spring-boot.git',
  ssh_url: 'git@github.com:yandooo/graphql-spring-boot.git',
  clone_url: 'https://github.com/yandooo/graphql-spring-boot.git',
  svn_url: 'https://github.com/yandooo/graphql-spring-boot',
  homepage: '',
  size: 228,
  stargazers_count: 159,
  watchers_count: 159,
  language: 'Java',
  has_issues: true,
  has_projects: true,
  has_downloads: true,
  has_wiki: true,
  has_pages: false,
  forks_count: 280,
  mirror_url: null,
  archived: false,
  disabled: false,
  open_issues_count: 10,
  license: {
    key: 'mit',
    name: 'MIT License',
    spdx_id: 'MIT',
    url: 'https://api.github.com/licenses/mit',
    node_id: 'MDc6TGljZW5zZTEz'
  },
  forks: 280,
  open_issues: 10,
  watchers: 159,
  default_branch: 'master',
  permissions: { admin: false, push: false, pull: true },
  score: 1
}

const validInputJSON = {
  "0": [
      {
          "id": 10,
          "title": "House",
          "level": 0,
          "children": [],
          "parent_id": null
      }
  ],
  "1": [
      {
          "id": 12,
          "title": "Red Roof",
          "level": 1,
          "children": [],
          "parent_id": 10
      },
      {
          "id": 18,
          "title": "Blue Roof",
          "level": 1,
          "children": [],
          "parent_id": 10
      },
      {
          "id": 13,
          "title": "Wall",
          "level": 1,
          "children": [],
          "parent_id": 10
      }
  ],
  "2": [
      {
          "id": 17,
          "title": "Blue Window",
          "level": 2,
          "children": [],
          "parent_id": 12
      },
      {
          "id": 16,
          "title": "Door",
          "level": 2,
          "children": [],
          "parent_id": 13
      },
      {
          "id": 15,
          "title": "Red Window",
          "level": 2,
          "children": [],
          "parent_id": 12
      }
  ],
  "3": [
      {
          "id": 21,
          "title": "Plain glass",
          "level": 3,
          "children": [],
          "parent_id": 17
      },
      {
          "id": 22,
          "title": "Tempered Glass",
          "level": 3,
          "children": [],
          "parent_id": 17
      },
      {
          "id": 25,
          "title": "Wooden Door",
          "level": 3,
          "children": [],
          "parent_id": 16
      }
  ]
};

const invalidInputJSON = {
  "0": [
      {
          "id": 10,
          "title": "House",
          "level": 0,
          "children": [],
          "parent_id": null
      },
      {
        "id": 11,
        "title": "Duplicate House",
        "level": 0,
        "children": [],
        "parent_id": null
    }
  ],
  "1": [
      {
          "id": 12,
          "title": "Red Roof",
          "level": 1,
          "children": [],
          "parent_id": 10
      },
      {
          "id": 18,
          "title": "Blue Roof",
          "level": 1,
          "children": [],
          "parent_id": 10
      },
      {
          "id": 13,
          "title": "Wall",
          "level": 1,
          "children": [],
          "parent_id": 10
      }
  ],
  "2": [
      {
          "id": 17,
          "title": "Blue Window",
          "level": 2,
          "children": [],
          "parent_id": 12
      },
      {
          "id": 16,
          "title": "Door",
          "level": 2,
          "children": [],
          "parent_id": 13
      },
      {
          "id": 15,
          "title": "Red Window",
          "level": 2,
          "children": [],
          "parent_id": 12
      }
  ],
  "3": [
      {
          "id": 21,
          "title": "Plain glass",
          "level": 3,
          "children": [],
          "parent_id": 17
      },
      {
          "id": 22,
          "title": "Tempered Glass",
          "level": 3,
          "children": [],
          "parent_id": 17
      },
      {
          "id": 25,
          "title": "Wooden Door",
          "level": 3,
          "children": [],
          "parent_id": 16
      }
  ]
}

const invalidInputZeroRootElementJSON = {
  "0": [
      {
          "id": 10,
          "title": "House",
          "level": 0,
          "children": [],
          "parent_id": 100
      },
  ],
  "1": [
      {
          "id": 12,
          "title": "Red Roof",
          "level": 1,
          "children": [],
          "parent_id": 10
      },
      {
          "id": 18,
          "title": "Blue Roof",
          "level": 1,
          "children": [],
          "parent_id": 10
      },
      {
          "id": 13,
          "title": "Wall",
          "level": 1,
          "children": [],
          "parent_id": 10
      }
  ],
  "2": [
      {
          "id": 17,
          "title": "Blue Window",
          "level": 2,
          "children": [],
          "parent_id": 12
      },
      {
          "id": 16,
          "title": "Door",
          "level": 2,
          "children": [],
          "parent_id": 13
      },
      {
          "id": 15,
          "title": "Red Window",
          "level": 2,
          "children": [],
          "parent_id": 12
      }
  ],
  "3": [
      {
          "id": 21,
          "title": "Plain glass",
          "level": 3,
          "children": [],
          "parent_id": 17
      },
      {
          "id": 22,
          "title": "Tempered Glass",
          "level": 3,
          "children": [],
          "parent_id": 17
      },
      {
          "id": 25,
          "title": "Wooden Door",
          "level": 3,
          "children": [],
          "parent_id": 16
      }
  ]
}

module.exports = {
  NodeJSRepoSampleResponse,
  GraphQLRepoSampleResponse,
  validInputJSON,
  invalidInputJSON,
  invalidInputZeroRootElementJSON
}