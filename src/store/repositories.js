import { createSlice } from '@reduxjs/toolkit';

const initialState = [
  {
    id: 427220271,
    node_id: 'R_kgDOGXbdLw',
    name: '50-projects-for-react-and-the-static-web',
    full_name: 'domkoder/50-projects-for-react-and-the-static-web',
    private: false,
    owner: {
      login: 'domkoder',
      id: 23723199,
      node_id: 'MDQ6VXNlcjIzNzIzMTk5',
      avatar_url: 'https://avatars.githubusercontent.com/u/23723199?v=4',
      gravatar_id: '',
      url: 'https://api.github.com/users/domkoder',
      html_url: 'https://github.com/domkoder',
      followers_url: 'https://api.github.com/users/domkoder/followers',
      following_url:
        'https://api.github.com/users/domkoder/following{/other_user}',
      gists_url: 'https://api.github.com/users/domkoder/gists{/gist_id}',
      starred_url:
        'https://api.github.com/users/domkoder/starred{/owner}{/repo}',
      subscriptions_url: 'https://api.github.com/users/domkoder/subscriptions',
      organizations_url: 'https://api.github.com/users/domkoder/orgs',
      repos_url: 'https://api.github.com/users/domkoder/repos',
      events_url: 'https://api.github.com/users/domkoder/events{/privacy}',
      received_events_url:
        'https://api.github.com/users/domkoder/received_events',
      type: 'User',
      site_admin: false,
    },
    html_url:
      'https://github.com/domkoder/50-projects-for-react-and-the-static-web',
    description:
      '⚛ 50 project ideas to learn by doing complete with project briefs, layout ideas, and resources!',
    fork: true,
    url: 'https://api.github.com/repos/domkoder/50-projects-for-react-and-the-static-web',
    forks_url:
      'https://api.github.com/repos/domkoder/50-projects-for-react-and-the-static-web/forks',
    keys_url:
      'https://api.github.com/repos/domkoder/50-projects-for-react-and-the-static-web/keys{/key_id}',
    collaborators_url:
      'https://api.github.com/repos/domkoder/50-projects-for-react-and-the-static-web/collaborators{/collaborator}',
    teams_url:
      'https://api.github.com/repos/domkoder/50-projects-for-react-and-the-static-web/teams',
    hooks_url:
      'https://api.github.com/repos/domkoder/50-projects-for-react-and-the-static-web/hooks',
    issue_events_url:
      'https://api.github.com/repos/domkoder/50-projects-for-react-and-the-static-web/issues/events{/number}',
    events_url:
      'https://api.github.com/repos/domkoder/50-projects-for-react-and-the-static-web/events',
    assignees_url:
      'https://api.github.com/repos/domkoder/50-projects-for-react-and-the-static-web/assignees{/user}',
    branches_url:
      'https://api.github.com/repos/domkoder/50-projects-for-react-and-the-static-web/branches{/branch}',
    tags_url:
      'https://api.github.com/repos/domkoder/50-projects-for-react-and-the-static-web/tags',
    blobs_url:
      'https://api.github.com/repos/domkoder/50-projects-for-react-and-the-static-web/git/blobs{/sha}',
    git_tags_url:
      'https://api.github.com/repos/domkoder/50-projects-for-react-and-the-static-web/git/tags{/sha}',
    git_refs_url:
      'https://api.github.com/repos/domkoder/50-projects-for-react-and-the-static-web/git/refs{/sha}',
    trees_url:
      'https://api.github.com/repos/domkoder/50-projects-for-react-and-the-static-web/git/trees{/sha}',
    statuses_url:
      'https://api.github.com/repos/domkoder/50-projects-for-react-and-the-static-web/statuses/{sha}',
    languages_url:
      'https://api.github.com/repos/domkoder/50-projects-for-react-and-the-static-web/languages',
    stargazers_url:
      'https://api.github.com/repos/domkoder/50-projects-for-react-and-the-static-web/stargazers',
    contributors_url:
      'https://api.github.com/repos/domkoder/50-projects-for-react-and-the-static-web/contributors',
    subscribers_url:
      'https://api.github.com/repos/domkoder/50-projects-for-react-and-the-static-web/subscribers',
    subscription_url:
      'https://api.github.com/repos/domkoder/50-projects-for-react-and-the-static-web/subscription',
    commits_url:
      'https://api.github.com/repos/domkoder/50-projects-for-react-and-the-static-web/commits{/sha}',
    git_commits_url:
      'https://api.github.com/repos/domkoder/50-projects-for-react-and-the-static-web/git/commits{/sha}',
    comments_url:
      'https://api.github.com/repos/domkoder/50-projects-for-react-and-the-static-web/comments{/number}',
    issue_comment_url:
      'https://api.github.com/repos/domkoder/50-projects-for-react-and-the-static-web/issues/comments{/number}',
    contents_url:
      'https://api.github.com/repos/domkoder/50-projects-for-react-and-the-static-web/contents/{+path}',
    compare_url:
      'https://api.github.com/repos/domkoder/50-projects-for-react-and-the-static-web/compare/{base}...{head}',
    merges_url:
      'https://api.github.com/repos/domkoder/50-projects-for-react-and-the-static-web/merges',
    archive_url:
      'https://api.github.com/repos/domkoder/50-projects-for-react-and-the-static-web/{archive_format}{/ref}',
    downloads_url:
      'https://api.github.com/repos/domkoder/50-projects-for-react-and-the-static-web/downloads',
    issues_url:
      'https://api.github.com/repos/domkoder/50-projects-for-react-and-the-static-web/issues{/number}',
    pulls_url:
      'https://api.github.com/repos/domkoder/50-projects-for-react-and-the-static-web/pulls{/number}',
    milestones_url:
      'https://api.github.com/repos/domkoder/50-projects-for-react-and-the-static-web/milestones{/number}',
    notifications_url:
      'https://api.github.com/repos/domkoder/50-projects-for-react-and-the-static-web/notifications{?since,all,participating}',
    labels_url:
      'https://api.github.com/repos/domkoder/50-projects-for-react-and-the-static-web/labels{/name}',
    releases_url:
      'https://api.github.com/repos/domkoder/50-projects-for-react-and-the-static-web/releases{/id}',
    deployments_url:
      'https://api.github.com/repos/domkoder/50-projects-for-react-and-the-static-web/deployments',
    created_at: '2021-11-12T03:28:13Z',
    updated_at: '2021-11-12T03:28:14Z',
    pushed_at: '2021-10-24T00:30:32Z',
    git_url:
      'git://github.com/domkoder/50-projects-for-react-and-the-static-web.git',
    ssh_url:
      'git@github.com:domkoder/50-projects-for-react-and-the-static-web.git',
    clone_url:
      'https://github.com/domkoder/50-projects-for-react-and-the-static-web.git',
    svn_url:
      'https://github.com/domkoder/50-projects-for-react-and-the-static-web',
    homepage: 'https://50reactprojects.com',
    size: 166,
    stargazers_count: 0,
    watchers_count: 0,
    language: null,
    has_issues: false,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    forks_count: 0,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 0,
    license: {
      key: 'mit',
      name: 'MIT License',
      spdx_id: 'MIT',
      url: 'https://api.github.com/licenses/mit',
      node_id: 'MDc6TGljZW5zZTEz',
    },
    allow_forking: true,
    is_template: false,
    topics: [],
    visibility: 'public',
    forks: 0,
    open_issues: 0,
    watchers: 0,
    default_branch: 'master',
  },
  {
    id: 232930173,
    node_id: 'MDEwOlJlcG9zaXRvcnkyMzI5MzAxNzM=',
    name: 'acme',
    full_name: 'domkoder/acme',
    private: false,
    owner: {
      login: 'domkoder',
      id: 23723199,
      node_id: 'MDQ6VXNlcjIzNzIzMTk5',
      avatar_url: 'https://avatars.githubusercontent.com/u/23723199?v=4',
      gravatar_id: '',
      url: 'https://api.github.com/users/domkoder',
      html_url: 'https://github.com/domkoder',
      followers_url: 'https://api.github.com/users/domkoder/followers',
      following_url:
        'https://api.github.com/users/domkoder/following{/other_user}',
      gists_url: 'https://api.github.com/users/domkoder/gists{/gist_id}',
      starred_url:
        'https://api.github.com/users/domkoder/starred{/owner}{/repo}',
      subscriptions_url: 'https://api.github.com/users/domkoder/subscriptions',
      organizations_url: 'https://api.github.com/users/domkoder/orgs',
      repos_url: 'https://api.github.com/users/domkoder/repos',
      events_url: 'https://api.github.com/users/domkoder/events{/privacy}',
      received_events_url:
        'https://api.github.com/users/domkoder/received_events',
      type: 'User',
      site_admin: false,
    },
    html_url: 'https://github.com/domkoder/acme',
    description: null,
    fork: false,
    url: 'https://api.github.com/repos/domkoder/acme',
    forks_url: 'https://api.github.com/repos/domkoder/acme/forks',
    keys_url: 'https://api.github.com/repos/domkoder/acme/keys{/key_id}',
    collaborators_url:
      'https://api.github.com/repos/domkoder/acme/collaborators{/collaborator}',
    teams_url: 'https://api.github.com/repos/domkoder/acme/teams',
    hooks_url: 'https://api.github.com/repos/domkoder/acme/hooks',
    issue_events_url:
      'https://api.github.com/repos/domkoder/acme/issues/events{/number}',
    events_url: 'https://api.github.com/repos/domkoder/acme/events',
    assignees_url:
      'https://api.github.com/repos/domkoder/acme/assignees{/user}',
    branches_url:
      'https://api.github.com/repos/domkoder/acme/branches{/branch}',
    tags_url: 'https://api.github.com/repos/domkoder/acme/tags',
    blobs_url: 'https://api.github.com/repos/domkoder/acme/git/blobs{/sha}',
    git_tags_url: 'https://api.github.com/repos/domkoder/acme/git/tags{/sha}',
    git_refs_url: 'https://api.github.com/repos/domkoder/acme/git/refs{/sha}',
    trees_url: 'https://api.github.com/repos/domkoder/acme/git/trees{/sha}',
    statuses_url: 'https://api.github.com/repos/domkoder/acme/statuses/{sha}',
    languages_url: 'https://api.github.com/repos/domkoder/acme/languages',
    stargazers_url: 'https://api.github.com/repos/domkoder/acme/stargazers',
    contributors_url: 'https://api.github.com/repos/domkoder/acme/contributors',
    subscribers_url: 'https://api.github.com/repos/domkoder/acme/subscribers',
    subscription_url: 'https://api.github.com/repos/domkoder/acme/subscription',
    commits_url: 'https://api.github.com/repos/domkoder/acme/commits{/sha}',
    git_commits_url:
      'https://api.github.com/repos/domkoder/acme/git/commits{/sha}',
    comments_url:
      'https://api.github.com/repos/domkoder/acme/comments{/number}',
    issue_comment_url:
      'https://api.github.com/repos/domkoder/acme/issues/comments{/number}',
    contents_url: 'https://api.github.com/repos/domkoder/acme/contents/{+path}',
    compare_url:
      'https://api.github.com/repos/domkoder/acme/compare/{base}...{head}',
    merges_url: 'https://api.github.com/repos/domkoder/acme/merges',
    archive_url:
      'https://api.github.com/repos/domkoder/acme/{archive_format}{/ref}',
    downloads_url: 'https://api.github.com/repos/domkoder/acme/downloads',
    issues_url: 'https://api.github.com/repos/domkoder/acme/issues{/number}',
    pulls_url: 'https://api.github.com/repos/domkoder/acme/pulls{/number}',
    milestones_url:
      'https://api.github.com/repos/domkoder/acme/milestones{/number}',
    notifications_url:
      'https://api.github.com/repos/domkoder/acme/notifications{?since,all,participating}',
    labels_url: 'https://api.github.com/repos/domkoder/acme/labels{/name}',
    releases_url: 'https://api.github.com/repos/domkoder/acme/releases{/id}',
    deployments_url: 'https://api.github.com/repos/domkoder/acme/deployments',
    created_at: '2020-01-10T00:04:26Z',
    updated_at: '2020-01-10T00:10:05Z',
    pushed_at: '2020-01-10T00:10:02Z',
    git_url: 'git://github.com/domkoder/acme.git',
    ssh_url: 'git@github.com:domkoder/acme.git',
    clone_url: 'https://github.com/domkoder/acme.git',
    svn_url: 'https://github.com/domkoder/acme',
    homepage: null,
    size: 162,
    stargazers_count: 0,
    watchers_count: 0,
    language: 'HTML',
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    forks_count: 0,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 0,
    license: null,
    allow_forking: true,
    is_template: false,
    topics: [],
    visibility: 'public',
    forks: 0,
    open_issues: 0,
    watchers: 0,
    default_branch: 'master',
  },
  {
    id: 389000441,
    node_id: 'MDEwOlJlcG9zaXRvcnkzODkwMDA0NDE=',
    name: 'advanced-react-hooks',
    full_name: 'domkoder/advanced-react-hooks',
    private: false,
    owner: {
      login: 'domkoder',
      id: 23723199,
      node_id: 'MDQ6VXNlcjIzNzIzMTk5',
      avatar_url: 'https://avatars.githubusercontent.com/u/23723199?v=4',
      gravatar_id: '',
      url: 'https://api.github.com/users/domkoder',
      html_url: 'https://github.com/domkoder',
      followers_url: 'https://api.github.com/users/domkoder/followers',
      following_url:
        'https://api.github.com/users/domkoder/following{/other_user}',
      gists_url: 'https://api.github.com/users/domkoder/gists{/gist_id}',
      starred_url:
        'https://api.github.com/users/domkoder/starred{/owner}{/repo}',
      subscriptions_url: 'https://api.github.com/users/domkoder/subscriptions',
      organizations_url: 'https://api.github.com/users/domkoder/orgs',
      repos_url: 'https://api.github.com/users/domkoder/repos',
      events_url: 'https://api.github.com/users/domkoder/events{/privacy}',
      received_events_url:
        'https://api.github.com/users/domkoder/received_events',
      type: 'User',
      site_admin: false,
    },
    html_url: 'https://github.com/domkoder/advanced-react-hooks',
    description: 'Learn Advanced React Hooks workshop',
    fork: true,
    url: 'https://api.github.com/repos/domkoder/advanced-react-hooks',
    forks_url:
      'https://api.github.com/repos/domkoder/advanced-react-hooks/forks',
    keys_url:
      'https://api.github.com/repos/domkoder/advanced-react-hooks/keys{/key_id}',
    collaborators_url:
      'https://api.github.com/repos/domkoder/advanced-react-hooks/collaborators{/collaborator}',
    teams_url:
      'https://api.github.com/repos/domkoder/advanced-react-hooks/teams',
    hooks_url:
      'https://api.github.com/repos/domkoder/advanced-react-hooks/hooks',
    issue_events_url:
      'https://api.github.com/repos/domkoder/advanced-react-hooks/issues/events{/number}',
    events_url:
      'https://api.github.com/repos/domkoder/advanced-react-hooks/events',
    assignees_url:
      'https://api.github.com/repos/domkoder/advanced-react-hooks/assignees{/user}',
    branches_url:
      'https://api.github.com/repos/domkoder/advanced-react-hooks/branches{/branch}',
    tags_url: 'https://api.github.com/repos/domkoder/advanced-react-hooks/tags',
    blobs_url:
      'https://api.github.com/repos/domkoder/advanced-react-hooks/git/blobs{/sha}',
    git_tags_url:
      'https://api.github.com/repos/domkoder/advanced-react-hooks/git/tags{/sha}',
    git_refs_url:
      'https://api.github.com/repos/domkoder/advanced-react-hooks/git/refs{/sha}',
    trees_url:
      'https://api.github.com/repos/domkoder/advanced-react-hooks/git/trees{/sha}',
    statuses_url:
      'https://api.github.com/repos/domkoder/advanced-react-hooks/statuses/{sha}',
    languages_url:
      'https://api.github.com/repos/domkoder/advanced-react-hooks/languages',
    stargazers_url:
      'https://api.github.com/repos/domkoder/advanced-react-hooks/stargazers',
    contributors_url:
      'https://api.github.com/repos/domkoder/advanced-react-hooks/contributors',
    subscribers_url:
      'https://api.github.com/repos/domkoder/advanced-react-hooks/subscribers',
    subscription_url:
      'https://api.github.com/repos/domkoder/advanced-react-hooks/subscription',
    commits_url:
      'https://api.github.com/repos/domkoder/advanced-react-hooks/commits{/sha}',
    git_commits_url:
      'https://api.github.com/repos/domkoder/advanced-react-hooks/git/commits{/sha}',
    comments_url:
      'https://api.github.com/repos/domkoder/advanced-react-hooks/comments{/number}',
    issue_comment_url:
      'https://api.github.com/repos/domkoder/advanced-react-hooks/issues/comments{/number}',
    contents_url:
      'https://api.github.com/repos/domkoder/advanced-react-hooks/contents/{+path}',
    compare_url:
      'https://api.github.com/repos/domkoder/advanced-react-hooks/compare/{base}...{head}',
    merges_url:
      'https://api.github.com/repos/domkoder/advanced-react-hooks/merges',
    archive_url:
      'https://api.github.com/repos/domkoder/advanced-react-hooks/{archive_format}{/ref}',
    downloads_url:
      'https://api.github.com/repos/domkoder/advanced-react-hooks/downloads',
    issues_url:
      'https://api.github.com/repos/domkoder/advanced-react-hooks/issues{/number}',
    pulls_url:
      'https://api.github.com/repos/domkoder/advanced-react-hooks/pulls{/number}',
    milestones_url:
      'https://api.github.com/repos/domkoder/advanced-react-hooks/milestones{/number}',
    notifications_url:
      'https://api.github.com/repos/domkoder/advanced-react-hooks/notifications{?since,all,participating}',
    labels_url:
      'https://api.github.com/repos/domkoder/advanced-react-hooks/labels{/name}',
    releases_url:
      'https://api.github.com/repos/domkoder/advanced-react-hooks/releases{/id}',
    deployments_url:
      'https://api.github.com/repos/domkoder/advanced-react-hooks/deployments',
    created_at: '2021-07-24T04:34:51Z',
    updated_at: '2021-10-22T04:02:11Z',
    pushed_at: '2021-10-22T04:02:06Z',
    git_url: 'git://github.com/domkoder/advanced-react-hooks.git',
    ssh_url: 'git@github.com:domkoder/advanced-react-hooks.git',
    clone_url: 'https://github.com/domkoder/advanced-react-hooks.git',
    svn_url: 'https://github.com/domkoder/advanced-react-hooks',
    homepage: 'https://epicreact.dev/advanced-hooks',
    size: 2155,
    stargazers_count: 0,
    watchers_count: 0,
    language: 'JavaScript',
    has_issues: false,
    has_projects: true,
    has_downloads: true,
    has_wiki: false,
    has_pages: false,
    forks_count: 0,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 0,
    license: {
      key: 'other',
      name: 'Other',
      spdx_id: 'NOASSERTION',
      url: null,
      node_id: 'MDc6TGljZW5zZTA=',
    },
    allow_forking: true,
    is_template: false,
    topics: [],
    visibility: 'public',
    forks: 0,
    open_issues: 0,
    watchers: 0,
    default_branch: 'main',
  },
  {
    id: 248215279,
    node_id: 'MDEwOlJlcG9zaXRvcnkyNDgyMTUyNzk=',
    name: 'assignment',
    full_name: 'domkoder/assignment',
    private: false,
    owner: {
      login: 'domkoder',
      id: 23723199,
      node_id: 'MDQ6VXNlcjIzNzIzMTk5',
      avatar_url: 'https://avatars.githubusercontent.com/u/23723199?v=4',
      gravatar_id: '',
      url: 'https://api.github.com/users/domkoder',
      html_url: 'https://github.com/domkoder',
      followers_url: 'https://api.github.com/users/domkoder/followers',
      following_url:
        'https://api.github.com/users/domkoder/following{/other_user}',
      gists_url: 'https://api.github.com/users/domkoder/gists{/gist_id}',
      starred_url:
        'https://api.github.com/users/domkoder/starred{/owner}{/repo}',
      subscriptions_url: 'https://api.github.com/users/domkoder/subscriptions',
      organizations_url: 'https://api.github.com/users/domkoder/orgs',
      repos_url: 'https://api.github.com/users/domkoder/repos',
      events_url: 'https://api.github.com/users/domkoder/events{/privacy}',
      received_events_url:
        'https://api.github.com/users/domkoder/received_events',
      type: 'User',
      site_admin: false,
    },
    html_url: 'https://github.com/domkoder/assignment',
    description: null,
    fork: true,
    url: 'https://api.github.com/repos/domkoder/assignment',
    forks_url: 'https://api.github.com/repos/domkoder/assignment/forks',
    keys_url: 'https://api.github.com/repos/domkoder/assignment/keys{/key_id}',
    collaborators_url:
      'https://api.github.com/repos/domkoder/assignment/collaborators{/collaborator}',
    teams_url: 'https://api.github.com/repos/domkoder/assignment/teams',
    hooks_url: 'https://api.github.com/repos/domkoder/assignment/hooks',
    issue_events_url:
      'https://api.github.com/repos/domkoder/assignment/issues/events{/number}',
    events_url: 'https://api.github.com/repos/domkoder/assignment/events',
    assignees_url:
      'https://api.github.com/repos/domkoder/assignment/assignees{/user}',
    branches_url:
      'https://api.github.com/repos/domkoder/assignment/branches{/branch}',
    tags_url: 'https://api.github.com/repos/domkoder/assignment/tags',
    blobs_url:
      'https://api.github.com/repos/domkoder/assignment/git/blobs{/sha}',
    git_tags_url:
      'https://api.github.com/repos/domkoder/assignment/git/tags{/sha}',
    git_refs_url:
      'https://api.github.com/repos/domkoder/assignment/git/refs{/sha}',
    trees_url:
      'https://api.github.com/repos/domkoder/assignment/git/trees{/sha}',
    statuses_url:
      'https://api.github.com/repos/domkoder/assignment/statuses/{sha}',
    languages_url: 'https://api.github.com/repos/domkoder/assignment/languages',
    stargazers_url:
      'https://api.github.com/repos/domkoder/assignment/stargazers',
    contributors_url:
      'https://api.github.com/repos/domkoder/assignment/contributors',
    subscribers_url:
      'https://api.github.com/repos/domkoder/assignment/subscribers',
    subscription_url:
      'https://api.github.com/repos/domkoder/assignment/subscription',
    commits_url:
      'https://api.github.com/repos/domkoder/assignment/commits{/sha}',
    git_commits_url:
      'https://api.github.com/repos/domkoder/assignment/git/commits{/sha}',
    comments_url:
      'https://api.github.com/repos/domkoder/assignment/comments{/number}',
    issue_comment_url:
      'https://api.github.com/repos/domkoder/assignment/issues/comments{/number}',
    contents_url:
      'https://api.github.com/repos/domkoder/assignment/contents/{+path}',
    compare_url:
      'https://api.github.com/repos/domkoder/assignment/compare/{base}...{head}',
    merges_url: 'https://api.github.com/repos/domkoder/assignment/merges',
    archive_url:
      'https://api.github.com/repos/domkoder/assignment/{archive_format}{/ref}',
    downloads_url: 'https://api.github.com/repos/domkoder/assignment/downloads',
    issues_url:
      'https://api.github.com/repos/domkoder/assignment/issues{/number}',
    pulls_url:
      'https://api.github.com/repos/domkoder/assignment/pulls{/number}',
    milestones_url:
      'https://api.github.com/repos/domkoder/assignment/milestones{/number}',
    notifications_url:
      'https://api.github.com/repos/domkoder/assignment/notifications{?since,all,participating}',
    labels_url:
      'https://api.github.com/repos/domkoder/assignment/labels{/name}',
    releases_url:
      'https://api.github.com/repos/domkoder/assignment/releases{/id}',
    deployments_url:
      'https://api.github.com/repos/domkoder/assignment/deployments',
    created_at: '2020-03-18T11:39:17Z',
    updated_at: '2020-03-18T11:39:18Z',
    pushed_at: '2020-03-18T10:35:38Z',
    git_url: 'git://github.com/domkoder/assignment.git',
    ssh_url: 'git@github.com:domkoder/assignment.git',
    clone_url: 'https://github.com/domkoder/assignment.git',
    svn_url: 'https://github.com/domkoder/assignment',
    homepage: null,
    size: 0,
    stargazers_count: 0,
    watchers_count: 0,
    language: null,
    has_issues: false,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    forks_count: 0,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 0,
    license: null,
    allow_forking: true,
    is_template: false,
    topics: [],
    visibility: 'public',
    forks: 0,
    open_issues: 0,
    watchers: 0,
    default_branch: 'master',
  },
  {
    id: 234086152,
    node_id: 'MDEwOlJlcG9zaXRvcnkyMzQwODYxNTI=',
    name: 'base-apparel',
    full_name: 'domkoder/base-apparel',
    private: false,
    owner: {
      login: 'domkoder',
      id: 23723199,
      node_id: 'MDQ6VXNlcjIzNzIzMTk5',
      avatar_url: 'https://avatars.githubusercontent.com/u/23723199?v=4',
      gravatar_id: '',
      url: 'https://api.github.com/users/domkoder',
      html_url: 'https://github.com/domkoder',
      followers_url: 'https://api.github.com/users/domkoder/followers',
      following_url:
        'https://api.github.com/users/domkoder/following{/other_user}',
      gists_url: 'https://api.github.com/users/domkoder/gists{/gist_id}',
      starred_url:
        'https://api.github.com/users/domkoder/starred{/owner}{/repo}',
      subscriptions_url: 'https://api.github.com/users/domkoder/subscriptions',
      organizations_url: 'https://api.github.com/users/domkoder/orgs',
      repos_url: 'https://api.github.com/users/domkoder/repos',
      events_url: 'https://api.github.com/users/domkoder/events{/privacy}',
      received_events_url:
        'https://api.github.com/users/domkoder/received_events',
      type: 'User',
      site_admin: false,
    },
    html_url: 'https://github.com/domkoder/base-apparel',
    description: 'Coming soon page and form validation.',
    fork: false,
    url: 'https://api.github.com/repos/domkoder/base-apparel',
    forks_url: 'https://api.github.com/repos/domkoder/base-apparel/forks',
    keys_url:
      'https://api.github.com/repos/domkoder/base-apparel/keys{/key_id}',
    collaborators_url:
      'https://api.github.com/repos/domkoder/base-apparel/collaborators{/collaborator}',
    teams_url: 'https://api.github.com/repos/domkoder/base-apparel/teams',
    hooks_url: 'https://api.github.com/repos/domkoder/base-apparel/hooks',
    issue_events_url:
      'https://api.github.com/repos/domkoder/base-apparel/issues/events{/number}',
    events_url: 'https://api.github.com/repos/domkoder/base-apparel/events',
    assignees_url:
      'https://api.github.com/repos/domkoder/base-apparel/assignees{/user}',
    branches_url:
      'https://api.github.com/repos/domkoder/base-apparel/branches{/branch}',
    tags_url: 'https://api.github.com/repos/domkoder/base-apparel/tags',
    blobs_url:
      'https://api.github.com/repos/domkoder/base-apparel/git/blobs{/sha}',
    git_tags_url:
      'https://api.github.com/repos/domkoder/base-apparel/git/tags{/sha}',
    git_refs_url:
      'https://api.github.com/repos/domkoder/base-apparel/git/refs{/sha}',
    trees_url:
      'https://api.github.com/repos/domkoder/base-apparel/git/trees{/sha}',
    statuses_url:
      'https://api.github.com/repos/domkoder/base-apparel/statuses/{sha}',
    languages_url:
      'https://api.github.com/repos/domkoder/base-apparel/languages',
    stargazers_url:
      'https://api.github.com/repos/domkoder/base-apparel/stargazers',
    contributors_url:
      'https://api.github.com/repos/domkoder/base-apparel/contributors',
    subscribers_url:
      'https://api.github.com/repos/domkoder/base-apparel/subscribers',
    subscription_url:
      'https://api.github.com/repos/domkoder/base-apparel/subscription',
    commits_url:
      'https://api.github.com/repos/domkoder/base-apparel/commits{/sha}',
    git_commits_url:
      'https://api.github.com/repos/domkoder/base-apparel/git/commits{/sha}',
    comments_url:
      'https://api.github.com/repos/domkoder/base-apparel/comments{/number}',
    issue_comment_url:
      'https://api.github.com/repos/domkoder/base-apparel/issues/comments{/number}',
    contents_url:
      'https://api.github.com/repos/domkoder/base-apparel/contents/{+path}',
    compare_url:
      'https://api.github.com/repos/domkoder/base-apparel/compare/{base}...{head}',
    merges_url: 'https://api.github.com/repos/domkoder/base-apparel/merges',
    archive_url:
      'https://api.github.com/repos/domkoder/base-apparel/{archive_format}{/ref}',
    downloads_url:
      'https://api.github.com/repos/domkoder/base-apparel/downloads',
    issues_url:
      'https://api.github.com/repos/domkoder/base-apparel/issues{/number}',
    pulls_url:
      'https://api.github.com/repos/domkoder/base-apparel/pulls{/number}',
    milestones_url:
      'https://api.github.com/repos/domkoder/base-apparel/milestones{/number}',
    notifications_url:
      'https://api.github.com/repos/domkoder/base-apparel/notifications{?since,all,participating}',
    labels_url:
      'https://api.github.com/repos/domkoder/base-apparel/labels{/name}',
    releases_url:
      'https://api.github.com/repos/domkoder/base-apparel/releases{/id}',
    deployments_url:
      'https://api.github.com/repos/domkoder/base-apparel/deployments',
    created_at: '2020-01-15T13:25:52Z',
    updated_at: '2020-03-12T01:38:39Z',
    pushed_at: '2020-03-12T01:38:37Z',
    git_url: 'git://github.com/domkoder/base-apparel.git',
    ssh_url: 'git@github.com:domkoder/base-apparel.git',
    clone_url: 'https://github.com/domkoder/base-apparel.git',
    svn_url: 'https://github.com/domkoder/base-apparel',
    homepage: null,
    size: 362,
    stargazers_count: 0,
    watchers_count: 0,
    language: 'CSS',
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: true,
    forks_count: 0,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 0,
    license: null,
    allow_forking: true,
    is_template: false,
    topics: [],
    visibility: 'public',
    forks: 0,
    open_issues: 0,
    watchers: 0,
    default_branch: 'master',
  },
  {
    id: 391795270,
    node_id: 'MDEwOlJlcG9zaXRvcnkzOTE3OTUyNzA=',
    name: 'beginners-guide-to-react',
    full_name: 'domkoder/beginners-guide-to-react',
    private: false,
    owner: {
      login: 'domkoder',
      id: 23723199,
      node_id: 'MDQ6VXNlcjIzNzIzMTk5',
      avatar_url: 'https://avatars.githubusercontent.com/u/23723199?v=4',
      gravatar_id: '',
      url: 'https://api.github.com/users/domkoder',
      html_url: 'https://github.com/domkoder',
      followers_url: 'https://api.github.com/users/domkoder/followers',
      following_url:
        'https://api.github.com/users/domkoder/following{/other_user}',
      gists_url: 'https://api.github.com/users/domkoder/gists{/gist_id}',
      starred_url:
        'https://api.github.com/users/domkoder/starred{/owner}{/repo}',
      subscriptions_url: 'https://api.github.com/users/domkoder/subscriptions',
      organizations_url: 'https://api.github.com/users/domkoder/orgs',
      repos_url: 'https://api.github.com/users/domkoder/repos',
      events_url: 'https://api.github.com/users/domkoder/events{/privacy}',
      received_events_url:
        'https://api.github.com/users/domkoder/received_events',
      type: 'User',
      site_admin: false,
    },
    html_url: 'https://github.com/domkoder/beginners-guide-to-react',
    description: 'beginners guide to react',
    fork: false,
    url: 'https://api.github.com/repos/domkoder/beginners-guide-to-react',
    forks_url:
      'https://api.github.com/repos/domkoder/beginners-guide-to-react/forks',
    keys_url:
      'https://api.github.com/repos/domkoder/beginners-guide-to-react/keys{/key_id}',
    collaborators_url:
      'https://api.github.com/repos/domkoder/beginners-guide-to-react/collaborators{/collaborator}',
    teams_url:
      'https://api.github.com/repos/domkoder/beginners-guide-to-react/teams',
    hooks_url:
      'https://api.github.com/repos/domkoder/beginners-guide-to-react/hooks',
    issue_events_url:
      'https://api.github.com/repos/domkoder/beginners-guide-to-react/issues/events{/number}',
    events_url:
      'https://api.github.com/repos/domkoder/beginners-guide-to-react/events',
    assignees_url:
      'https://api.github.com/repos/domkoder/beginners-guide-to-react/assignees{/user}',
    branches_url:
      'https://api.github.com/repos/domkoder/beginners-guide-to-react/branches{/branch}',
    tags_url:
      'https://api.github.com/repos/domkoder/beginners-guide-to-react/tags',
    blobs_url:
      'https://api.github.com/repos/domkoder/beginners-guide-to-react/git/blobs{/sha}',
    git_tags_url:
      'https://api.github.com/repos/domkoder/beginners-guide-to-react/git/tags{/sha}',
    git_refs_url:
      'https://api.github.com/repos/domkoder/beginners-guide-to-react/git/refs{/sha}',
    trees_url:
      'https://api.github.com/repos/domkoder/beginners-guide-to-react/git/trees{/sha}',
    statuses_url:
      'https://api.github.com/repos/domkoder/beginners-guide-to-react/statuses/{sha}',
    languages_url:
      'https://api.github.com/repos/domkoder/beginners-guide-to-react/languages',
    stargazers_url:
      'https://api.github.com/repos/domkoder/beginners-guide-to-react/stargazers',
    contributors_url:
      'https://api.github.com/repos/domkoder/beginners-guide-to-react/contributors',
    subscribers_url:
      'https://api.github.com/repos/domkoder/beginners-guide-to-react/subscribers',
    subscription_url:
      'https://api.github.com/repos/domkoder/beginners-guide-to-react/subscription',
    commits_url:
      'https://api.github.com/repos/domkoder/beginners-guide-to-react/commits{/sha}',
    git_commits_url:
      'https://api.github.com/repos/domkoder/beginners-guide-to-react/git/commits{/sha}',
    comments_url:
      'https://api.github.com/repos/domkoder/beginners-guide-to-react/comments{/number}',
    issue_comment_url:
      'https://api.github.com/repos/domkoder/beginners-guide-to-react/issues/comments{/number}',
    contents_url:
      'https://api.github.com/repos/domkoder/beginners-guide-to-react/contents/{+path}',
    compare_url:
      'https://api.github.com/repos/domkoder/beginners-guide-to-react/compare/{base}...{head}',
    merges_url:
      'https://api.github.com/repos/domkoder/beginners-guide-to-react/merges',
    archive_url:
      'https://api.github.com/repos/domkoder/beginners-guide-to-react/{archive_format}{/ref}',
    downloads_url:
      'https://api.github.com/repos/domkoder/beginners-guide-to-react/downloads',
    issues_url:
      'https://api.github.com/repos/domkoder/beginners-guide-to-react/issues{/number}',
    pulls_url:
      'https://api.github.com/repos/domkoder/beginners-guide-to-react/pulls{/number}',
    milestones_url:
      'https://api.github.com/repos/domkoder/beginners-guide-to-react/milestones{/number}',
    notifications_url:
      'https://api.github.com/repos/domkoder/beginners-guide-to-react/notifications{?since,all,participating}',
    labels_url:
      'https://api.github.com/repos/domkoder/beginners-guide-to-react/labels{/name}',
    releases_url:
      'https://api.github.com/repos/domkoder/beginners-guide-to-react/releases{/id}',
    deployments_url:
      'https://api.github.com/repos/domkoder/beginners-guide-to-react/deployments',
    created_at: '2021-08-02T02:36:26Z',
    updated_at: '2021-08-02T02:37:19Z',
    pushed_at: '2021-08-02T02:37:16Z',
    git_url: 'git://github.com/domkoder/beginners-guide-to-react.git',
    ssh_url: 'git@github.com:domkoder/beginners-guide-to-react.git',
    clone_url: 'https://github.com/domkoder/beginners-guide-to-react.git',
    svn_url: 'https://github.com/domkoder/beginners-guide-to-react',
    homepage: null,
    size: 3,
    stargazers_count: 0,
    watchers_count: 0,
    language: 'HTML',
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    forks_count: 0,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 0,
    license: null,
    allow_forking: true,
    is_template: false,
    topics: [],
    visibility: 'public',
    forks: 0,
    open_issues: 0,
    watchers: 0,
    default_branch: 'main',
  },
  {
    id: 127944718,
    node_id: 'MDEwOlJlcG9zaXRvcnkxMjc5NDQ3MTg=',
    name: 'blog',
    full_name: 'domkoder/blog',
    private: false,
    owner: {
      login: 'domkoder',
      id: 23723199,
      node_id: 'MDQ6VXNlcjIzNzIzMTk5',
      avatar_url: 'https://avatars.githubusercontent.com/u/23723199?v=4',
      gravatar_id: '',
      url: 'https://api.github.com/users/domkoder',
      html_url: 'https://github.com/domkoder',
      followers_url: 'https://api.github.com/users/domkoder/followers',
      following_url:
        'https://api.github.com/users/domkoder/following{/other_user}',
      gists_url: 'https://api.github.com/users/domkoder/gists{/gist_id}',
      starred_url:
        'https://api.github.com/users/domkoder/starred{/owner}{/repo}',
      subscriptions_url: 'https://api.github.com/users/domkoder/subscriptions',
      organizations_url: 'https://api.github.com/users/domkoder/orgs',
      repos_url: 'https://api.github.com/users/domkoder/repos',
      events_url: 'https://api.github.com/users/domkoder/events{/privacy}',
      received_events_url:
        'https://api.github.com/users/domkoder/received_events',
      type: 'User',
      site_admin: false,
    },
    html_url: 'https://github.com/domkoder/blog',
    description: 'Is just a simple blogging app .',
    fork: false,
    url: 'https://api.github.com/repos/domkoder/blog',
    forks_url: 'https://api.github.com/repos/domkoder/blog/forks',
    keys_url: 'https://api.github.com/repos/domkoder/blog/keys{/key_id}',
    collaborators_url:
      'https://api.github.com/repos/domkoder/blog/collaborators{/collaborator}',
    teams_url: 'https://api.github.com/repos/domkoder/blog/teams',
    hooks_url: 'https://api.github.com/repos/domkoder/blog/hooks',
    issue_events_url:
      'https://api.github.com/repos/domkoder/blog/issues/events{/number}',
    events_url: 'https://api.github.com/repos/domkoder/blog/events',
    assignees_url:
      'https://api.github.com/repos/domkoder/blog/assignees{/user}',
    branches_url:
      'https://api.github.com/repos/domkoder/blog/branches{/branch}',
    tags_url: 'https://api.github.com/repos/domkoder/blog/tags',
    blobs_url: 'https://api.github.com/repos/domkoder/blog/git/blobs{/sha}',
    git_tags_url: 'https://api.github.com/repos/domkoder/blog/git/tags{/sha}',
    git_refs_url: 'https://api.github.com/repos/domkoder/blog/git/refs{/sha}',
    trees_url: 'https://api.github.com/repos/domkoder/blog/git/trees{/sha}',
    statuses_url: 'https://api.github.com/repos/domkoder/blog/statuses/{sha}',
    languages_url: 'https://api.github.com/repos/domkoder/blog/languages',
    stargazers_url: 'https://api.github.com/repos/domkoder/blog/stargazers',
    contributors_url: 'https://api.github.com/repos/domkoder/blog/contributors',
    subscribers_url: 'https://api.github.com/repos/domkoder/blog/subscribers',
    subscription_url: 'https://api.github.com/repos/domkoder/blog/subscription',
    commits_url: 'https://api.github.com/repos/domkoder/blog/commits{/sha}',
    git_commits_url:
      'https://api.github.com/repos/domkoder/blog/git/commits{/sha}',
    comments_url:
      'https://api.github.com/repos/domkoder/blog/comments{/number}',
    issue_comment_url:
      'https://api.github.com/repos/domkoder/blog/issues/comments{/number}',
    contents_url: 'https://api.github.com/repos/domkoder/blog/contents/{+path}',
    compare_url:
      'https://api.github.com/repos/domkoder/blog/compare/{base}...{head}',
    merges_url: 'https://api.github.com/repos/domkoder/blog/merges',
    archive_url:
      'https://api.github.com/repos/domkoder/blog/{archive_format}{/ref}',
    downloads_url: 'https://api.github.com/repos/domkoder/blog/downloads',
    issues_url: 'https://api.github.com/repos/domkoder/blog/issues{/number}',
    pulls_url: 'https://api.github.com/repos/domkoder/blog/pulls{/number}',
    milestones_url:
      'https://api.github.com/repos/domkoder/blog/milestones{/number}',
    notifications_url:
      'https://api.github.com/repos/domkoder/blog/notifications{?since,all,participating}',
    labels_url: 'https://api.github.com/repos/domkoder/blog/labels{/name}',
    releases_url: 'https://api.github.com/repos/domkoder/blog/releases{/id}',
    deployments_url: 'https://api.github.com/repos/domkoder/blog/deployments',
    created_at: '2018-04-03T17:34:21Z',
    updated_at: '2018-04-03T17:37:36Z',
    pushed_at: '2018-04-03T17:37:34Z',
    git_url: 'git://github.com/domkoder/blog.git',
    ssh_url: 'git@github.com:domkoder/blog.git',
    clone_url: 'https://github.com/domkoder/blog.git',
    svn_url: 'https://github.com/domkoder/blog',
    homepage: null,
    size: 8479,
    stargazers_count: 0,
    watchers_count: 0,
    language: 'PHP',
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    forks_count: 0,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 0,
    license: null,
    allow_forking: true,
    is_template: false,
    topics: [],
    visibility: 'public',
    forks: 0,
    open_issues: 0,
    watchers: 0,
    default_branch: 'master',
  },
  {
    id: 391795701,
    node_id: 'MDEwOlJlcG9zaXRvcnkzOTE3OTU3MDE=',
    name: 'book-list',
    full_name: 'domkoder/book-list',
    private: false,
    owner: {
      login: 'domkoder',
      id: 23723199,
      node_id: 'MDQ6VXNlcjIzNzIzMTk5',
      avatar_url: 'https://avatars.githubusercontent.com/u/23723199?v=4',
      gravatar_id: '',
      url: 'https://api.github.com/users/domkoder',
      html_url: 'https://github.com/domkoder',
      followers_url: 'https://api.github.com/users/domkoder/followers',
      following_url:
        'https://api.github.com/users/domkoder/following{/other_user}',
      gists_url: 'https://api.github.com/users/domkoder/gists{/gist_id}',
      starred_url:
        'https://api.github.com/users/domkoder/starred{/owner}{/repo}',
      subscriptions_url: 'https://api.github.com/users/domkoder/subscriptions',
      organizations_url: 'https://api.github.com/users/domkoder/orgs',
      repos_url: 'https://api.github.com/users/domkoder/repos',
      events_url: 'https://api.github.com/users/domkoder/events{/privacy}',
      received_events_url:
        'https://api.github.com/users/domkoder/received_events',
      type: 'User',
      site_admin: false,
    },
    html_url: 'https://github.com/domkoder/book-list',
    description: 'a book list app',
    fork: false,
    url: 'https://api.github.com/repos/domkoder/book-list',
    forks_url: 'https://api.github.com/repos/domkoder/book-list/forks',
    keys_url: 'https://api.github.com/repos/domkoder/book-list/keys{/key_id}',
    collaborators_url:
      'https://api.github.com/repos/domkoder/book-list/collaborators{/collaborator}',
    teams_url: 'https://api.github.com/repos/domkoder/book-list/teams',
    hooks_url: 'https://api.github.com/repos/domkoder/book-list/hooks',
    issue_events_url:
      'https://api.github.com/repos/domkoder/book-list/issues/events{/number}',
    events_url: 'https://api.github.com/repos/domkoder/book-list/events',
    assignees_url:
      'https://api.github.com/repos/domkoder/book-list/assignees{/user}',
    branches_url:
      'https://api.github.com/repos/domkoder/book-list/branches{/branch}',
    tags_url: 'https://api.github.com/repos/domkoder/book-list/tags',
    blobs_url:
      'https://api.github.com/repos/domkoder/book-list/git/blobs{/sha}',
    git_tags_url:
      'https://api.github.com/repos/domkoder/book-list/git/tags{/sha}',
    git_refs_url:
      'https://api.github.com/repos/domkoder/book-list/git/refs{/sha}',
    trees_url:
      'https://api.github.com/repos/domkoder/book-list/git/trees{/sha}',
    statuses_url:
      'https://api.github.com/repos/domkoder/book-list/statuses/{sha}',
    languages_url: 'https://api.github.com/repos/domkoder/book-list/languages',
    stargazers_url:
      'https://api.github.com/repos/domkoder/book-list/stargazers',
    contributors_url:
      'https://api.github.com/repos/domkoder/book-list/contributors',
    subscribers_url:
      'https://api.github.com/repos/domkoder/book-list/subscribers',
    subscription_url:
      'https://api.github.com/repos/domkoder/book-list/subscription',
    commits_url:
      'https://api.github.com/repos/domkoder/book-list/commits{/sha}',
    git_commits_url:
      'https://api.github.com/repos/domkoder/book-list/git/commits{/sha}',
    comments_url:
      'https://api.github.com/repos/domkoder/book-list/comments{/number}',
    issue_comment_url:
      'https://api.github.com/repos/domkoder/book-list/issues/comments{/number}',
    contents_url:
      'https://api.github.com/repos/domkoder/book-list/contents/{+path}',
    compare_url:
      'https://api.github.com/repos/domkoder/book-list/compare/{base}...{head}',
    merges_url: 'https://api.github.com/repos/domkoder/book-list/merges',
    archive_url:
      'https://api.github.com/repos/domkoder/book-list/{archive_format}{/ref}',
    downloads_url: 'https://api.github.com/repos/domkoder/book-list/downloads',
    issues_url:
      'https://api.github.com/repos/domkoder/book-list/issues{/number}',
    pulls_url: 'https://api.github.com/repos/domkoder/book-list/pulls{/number}',
    milestones_url:
      'https://api.github.com/repos/domkoder/book-list/milestones{/number}',
    notifications_url:
      'https://api.github.com/repos/domkoder/book-list/notifications{?since,all,participating}',
    labels_url: 'https://api.github.com/repos/domkoder/book-list/labels{/name}',
    releases_url:
      'https://api.github.com/repos/domkoder/book-list/releases{/id}',
    deployments_url:
      'https://api.github.com/repos/domkoder/book-list/deployments',
    created_at: '2021-08-02T02:38:57Z',
    updated_at: '2021-08-02T02:40:01Z',
    pushed_at: '2021-08-02T02:39:58Z',
    git_url: 'git://github.com/domkoder/book-list.git',
    ssh_url: 'git@github.com:domkoder/book-list.git',
    clone_url: 'https://github.com/domkoder/book-list.git',
    svn_url: 'https://github.com/domkoder/book-list',
    homepage: null,
    size: 173,
    stargazers_count: 0,
    watchers_count: 0,
    language: 'JavaScript',
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    forks_count: 0,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 0,
    license: null,
    allow_forking: true,
    is_template: false,
    topics: [],
    visibility: 'public',
    forks: 0,
    open_issues: 0,
    watchers: 0,
    default_branch: 'main',
  },
  {
    id: 385819827,
    node_id: 'MDEwOlJlcG9zaXRvcnkzODU4MTk4Mjc=',
    name: 'bookshelf',
    full_name: 'domkoder/bookshelf',
    private: false,
    owner: {
      login: 'domkoder',
      id: 23723199,
      node_id: 'MDQ6VXNlcjIzNzIzMTk5',
      avatar_url: 'https://avatars.githubusercontent.com/u/23723199?v=4',
      gravatar_id: '',
      url: 'https://api.github.com/users/domkoder',
      html_url: 'https://github.com/domkoder',
      followers_url: 'https://api.github.com/users/domkoder/followers',
      following_url:
        'https://api.github.com/users/domkoder/following{/other_user}',
      gists_url: 'https://api.github.com/users/domkoder/gists{/gist_id}',
      starred_url:
        'https://api.github.com/users/domkoder/starred{/owner}{/repo}',
      subscriptions_url: 'https://api.github.com/users/domkoder/subscriptions',
      organizations_url: 'https://api.github.com/users/domkoder/orgs',
      repos_url: 'https://api.github.com/users/domkoder/repos',
      events_url: 'https://api.github.com/users/domkoder/events{/privacy}',
      received_events_url:
        'https://api.github.com/users/domkoder/received_events',
      type: 'User',
      site_admin: false,
    },
    html_url: 'https://github.com/domkoder/bookshelf',
    description: 'Build a ReactJS App workshop',
    fork: true,
    url: 'https://api.github.com/repos/domkoder/bookshelf',
    forks_url: 'https://api.github.com/repos/domkoder/bookshelf/forks',
    keys_url: 'https://api.github.com/repos/domkoder/bookshelf/keys{/key_id}',
    collaborators_url:
      'https://api.github.com/repos/domkoder/bookshelf/collaborators{/collaborator}',
    teams_url: 'https://api.github.com/repos/domkoder/bookshelf/teams',
    hooks_url: 'https://api.github.com/repos/domkoder/bookshelf/hooks',
    issue_events_url:
      'https://api.github.com/repos/domkoder/bookshelf/issues/events{/number}',
    events_url: 'https://api.github.com/repos/domkoder/bookshelf/events',
    assignees_url:
      'https://api.github.com/repos/domkoder/bookshelf/assignees{/user}',
    branches_url:
      'https://api.github.com/repos/domkoder/bookshelf/branches{/branch}',
    tags_url: 'https://api.github.com/repos/domkoder/bookshelf/tags',
    blobs_url:
      'https://api.github.com/repos/domkoder/bookshelf/git/blobs{/sha}',
    git_tags_url:
      'https://api.github.com/repos/domkoder/bookshelf/git/tags{/sha}',
    git_refs_url:
      'https://api.github.com/repos/domkoder/bookshelf/git/refs{/sha}',
    trees_url:
      'https://api.github.com/repos/domkoder/bookshelf/git/trees{/sha}',
    statuses_url:
      'https://api.github.com/repos/domkoder/bookshelf/statuses/{sha}',
    languages_url: 'https://api.github.com/repos/domkoder/bookshelf/languages',
    stargazers_url:
      'https://api.github.com/repos/domkoder/bookshelf/stargazers',
    contributors_url:
      'https://api.github.com/repos/domkoder/bookshelf/contributors',
    subscribers_url:
      'https://api.github.com/repos/domkoder/bookshelf/subscribers',
    subscription_url:
      'https://api.github.com/repos/domkoder/bookshelf/subscription',
    commits_url:
      'https://api.github.com/repos/domkoder/bookshelf/commits{/sha}',
    git_commits_url:
      'https://api.github.com/repos/domkoder/bookshelf/git/commits{/sha}',
    comments_url:
      'https://api.github.com/repos/domkoder/bookshelf/comments{/number}',
    issue_comment_url:
      'https://api.github.com/repos/domkoder/bookshelf/issues/comments{/number}',
    contents_url:
      'https://api.github.com/repos/domkoder/bookshelf/contents/{+path}',
    compare_url:
      'https://api.github.com/repos/domkoder/bookshelf/compare/{base}...{head}',
    merges_url: 'https://api.github.com/repos/domkoder/bookshelf/merges',
    archive_url:
      'https://api.github.com/repos/domkoder/bookshelf/{archive_format}{/ref}',
    downloads_url: 'https://api.github.com/repos/domkoder/bookshelf/downloads',
    issues_url:
      'https://api.github.com/repos/domkoder/bookshelf/issues{/number}',
    pulls_url: 'https://api.github.com/repos/domkoder/bookshelf/pulls{/number}',
    milestones_url:
      'https://api.github.com/repos/domkoder/bookshelf/milestones{/number}',
    notifications_url:
      'https://api.github.com/repos/domkoder/bookshelf/notifications{?since,all,participating}',
    labels_url: 'https://api.github.com/repos/domkoder/bookshelf/labels{/name}',
    releases_url:
      'https://api.github.com/repos/domkoder/bookshelf/releases{/id}',
    deployments_url:
      'https://api.github.com/repos/domkoder/bookshelf/deployments',
    created_at: '2021-07-14T05:05:37Z',
    updated_at: '2021-11-02T03:01:27Z',
    pushed_at: '2021-11-02T03:06:35Z',
    git_url: 'git://github.com/domkoder/bookshelf.git',
    ssh_url: 'git@github.com:domkoder/bookshelf.git',
    clone_url: 'https://github.com/domkoder/bookshelf.git',
    svn_url: 'https://github.com/domkoder/bookshelf',
    homepage: 'https://epicreact.dev/app',
    size: 4254,
    stargazers_count: 0,
    watchers_count: 0,
    language: 'JavaScript',
    has_issues: false,
    has_projects: true,
    has_downloads: true,
    has_wiki: false,
    has_pages: false,
    forks_count: 0,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 1,
    license: {
      key: 'other',
      name: 'Other',
      spdx_id: 'NOASSERTION',
      url: null,
      node_id: 'MDc6TGljZW5zZTA=',
    },
    allow_forking: true,
    is_template: false,
    topics: [],
    visibility: 'public',
    forks: 0,
    open_issues: 1,
    watchers: 0,
    default_branch: 'main',
  },
  {
    id: 372549136,
    node_id: 'MDEwOlJlcG9zaXRvcnkzNzI1NDkxMzY=',
    name: 'buycoins-coding-challenge',
    full_name: 'domkoder/buycoins-coding-challenge',
    private: false,
    owner: {
      login: 'domkoder',
      id: 23723199,
      node_id: 'MDQ6VXNlcjIzNzIzMTk5',
      avatar_url: 'https://avatars.githubusercontent.com/u/23723199?v=4',
      gravatar_id: '',
      url: 'https://api.github.com/users/domkoder',
      html_url: 'https://github.com/domkoder',
      followers_url: 'https://api.github.com/users/domkoder/followers',
      following_url:
        'https://api.github.com/users/domkoder/following{/other_user}',
      gists_url: 'https://api.github.com/users/domkoder/gists{/gist_id}',
      starred_url:
        'https://api.github.com/users/domkoder/starred{/owner}{/repo}',
      subscriptions_url: 'https://api.github.com/users/domkoder/subscriptions',
      organizations_url: 'https://api.github.com/users/domkoder/orgs',
      repos_url: 'https://api.github.com/users/domkoder/repos',
      events_url: 'https://api.github.com/users/domkoder/events{/privacy}',
      received_events_url:
        'https://api.github.com/users/domkoder/received_events',
      type: 'User',
      site_admin: false,
    },
    html_url: 'https://github.com/domkoder/buycoins-coding-challenge',
    description: 'buycoins coding challenge ',
    fork: false,
    url: 'https://api.github.com/repos/domkoder/buycoins-coding-challenge',
    forks_url:
      'https://api.github.com/repos/domkoder/buycoins-coding-challenge/forks',
    keys_url:
      'https://api.github.com/repos/domkoder/buycoins-coding-challenge/keys{/key_id}',
    collaborators_url:
      'https://api.github.com/repos/domkoder/buycoins-coding-challenge/collaborators{/collaborator}',
    teams_url:
      'https://api.github.com/repos/domkoder/buycoins-coding-challenge/teams',
    hooks_url:
      'https://api.github.com/repos/domkoder/buycoins-coding-challenge/hooks',
    issue_events_url:
      'https://api.github.com/repos/domkoder/buycoins-coding-challenge/issues/events{/number}',
    events_url:
      'https://api.github.com/repos/domkoder/buycoins-coding-challenge/events',
    assignees_url:
      'https://api.github.com/repos/domkoder/buycoins-coding-challenge/assignees{/user}',
    branches_url:
      'https://api.github.com/repos/domkoder/buycoins-coding-challenge/branches{/branch}',
    tags_url:
      'https://api.github.com/repos/domkoder/buycoins-coding-challenge/tags',
    blobs_url:
      'https://api.github.com/repos/domkoder/buycoins-coding-challenge/git/blobs{/sha}',
    git_tags_url:
      'https://api.github.com/repos/domkoder/buycoins-coding-challenge/git/tags{/sha}',
    git_refs_url:
      'https://api.github.com/repos/domkoder/buycoins-coding-challenge/git/refs{/sha}',
    trees_url:
      'https://api.github.com/repos/domkoder/buycoins-coding-challenge/git/trees{/sha}',
    statuses_url:
      'https://api.github.com/repos/domkoder/buycoins-coding-challenge/statuses/{sha}',
    languages_url:
      'https://api.github.com/repos/domkoder/buycoins-coding-challenge/languages',
    stargazers_url:
      'https://api.github.com/repos/domkoder/buycoins-coding-challenge/stargazers',
    contributors_url:
      'https://api.github.com/repos/domkoder/buycoins-coding-challenge/contributors',
    subscribers_url:
      'https://api.github.com/repos/domkoder/buycoins-coding-challenge/subscribers',
    subscription_url:
      'https://api.github.com/repos/domkoder/buycoins-coding-challenge/subscription',
    commits_url:
      'https://api.github.com/repos/domkoder/buycoins-coding-challenge/commits{/sha}',
    git_commits_url:
      'https://api.github.com/repos/domkoder/buycoins-coding-challenge/git/commits{/sha}',
    comments_url:
      'https://api.github.com/repos/domkoder/buycoins-coding-challenge/comments{/number}',
    issue_comment_url:
      'https://api.github.com/repos/domkoder/buycoins-coding-challenge/issues/comments{/number}',
    contents_url:
      'https://api.github.com/repos/domkoder/buycoins-coding-challenge/contents/{+path}',
    compare_url:
      'https://api.github.com/repos/domkoder/buycoins-coding-challenge/compare/{base}...{head}',
    merges_url:
      'https://api.github.com/repos/domkoder/buycoins-coding-challenge/merges',
    archive_url:
      'https://api.github.com/repos/domkoder/buycoins-coding-challenge/{archive_format}{/ref}',
    downloads_url:
      'https://api.github.com/repos/domkoder/buycoins-coding-challenge/downloads',
    issues_url:
      'https://api.github.com/repos/domkoder/buycoins-coding-challenge/issues{/number}',
    pulls_url:
      'https://api.github.com/repos/domkoder/buycoins-coding-challenge/pulls{/number}',
    milestones_url:
      'https://api.github.com/repos/domkoder/buycoins-coding-challenge/milestones{/number}',
    notifications_url:
      'https://api.github.com/repos/domkoder/buycoins-coding-challenge/notifications{?since,all,participating}',
    labels_url:
      'https://api.github.com/repos/domkoder/buycoins-coding-challenge/labels{/name}',
    releases_url:
      'https://api.github.com/repos/domkoder/buycoins-coding-challenge/releases{/id}',
    deployments_url:
      'https://api.github.com/repos/domkoder/buycoins-coding-challenge/deployments',
    created_at: '2021-05-31T15:17:12Z',
    updated_at: '2021-06-03T09:13:01Z',
    pushed_at: '2021-06-03T09:12:58Z',
    git_url: 'git://github.com/domkoder/buycoins-coding-challenge.git',
    ssh_url: 'git@github.com:domkoder/buycoins-coding-challenge.git',
    clone_url: 'https://github.com/domkoder/buycoins-coding-challenge.git',
    svn_url: 'https://github.com/domkoder/buycoins-coding-challenge',
    homepage: null,
    size: 11,
    stargazers_count: 1,
    watchers_count: 1,
    language: 'HTML',
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    forks_count: 0,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 0,
    license: null,
    allow_forking: true,
    is_template: false,
    topics: [],
    visibility: 'public',
    forks: 0,
    open_issues: 0,
    watchers: 1,
    default_branch: 'main',
  },
  {
    id: 375389875,
    node_id: 'MDEwOlJlcG9zaXRvcnkzNzUzODk4NzU=',
    name: 'chartist-js',
    full_name: 'domkoder/chartist-js',
    private: false,
    owner: {
      login: 'domkoder',
      id: 23723199,
      node_id: 'MDQ6VXNlcjIzNzIzMTk5',
      avatar_url: 'https://avatars.githubusercontent.com/u/23723199?v=4',
      gravatar_id: '',
      url: 'https://api.github.com/users/domkoder',
      html_url: 'https://github.com/domkoder',
      followers_url: 'https://api.github.com/users/domkoder/followers',
      following_url:
        'https://api.github.com/users/domkoder/following{/other_user}',
      gists_url: 'https://api.github.com/users/domkoder/gists{/gist_id}',
      starred_url:
        'https://api.github.com/users/domkoder/starred{/owner}{/repo}',
      subscriptions_url: 'https://api.github.com/users/domkoder/subscriptions',
      organizations_url: 'https://api.github.com/users/domkoder/orgs',
      repos_url: 'https://api.github.com/users/domkoder/repos',
      events_url: 'https://api.github.com/users/domkoder/events{/privacy}',
      received_events_url:
        'https://api.github.com/users/domkoder/received_events',
      type: 'User',
      site_admin: false,
    },
    html_url: 'https://github.com/domkoder/chartist-js',
    description: 'Simple responsive charts',
    fork: true,
    url: 'https://api.github.com/repos/domkoder/chartist-js',
    forks_url: 'https://api.github.com/repos/domkoder/chartist-js/forks',
    keys_url: 'https://api.github.com/repos/domkoder/chartist-js/keys{/key_id}',
    collaborators_url:
      'https://api.github.com/repos/domkoder/chartist-js/collaborators{/collaborator}',
    teams_url: 'https://api.github.com/repos/domkoder/chartist-js/teams',
    hooks_url: 'https://api.github.com/repos/domkoder/chartist-js/hooks',
    issue_events_url:
      'https://api.github.com/repos/domkoder/chartist-js/issues/events{/number}',
    events_url: 'https://api.github.com/repos/domkoder/chartist-js/events',
    assignees_url:
      'https://api.github.com/repos/domkoder/chartist-js/assignees{/user}',
    branches_url:
      'https://api.github.com/repos/domkoder/chartist-js/branches{/branch}',
    tags_url: 'https://api.github.com/repos/domkoder/chartist-js/tags',
    blobs_url:
      'https://api.github.com/repos/domkoder/chartist-js/git/blobs{/sha}',
    git_tags_url:
      'https://api.github.com/repos/domkoder/chartist-js/git/tags{/sha}',
    git_refs_url:
      'https://api.github.com/repos/domkoder/chartist-js/git/refs{/sha}',
    trees_url:
      'https://api.github.com/repos/domkoder/chartist-js/git/trees{/sha}',
    statuses_url:
      'https://api.github.com/repos/domkoder/chartist-js/statuses/{sha}',
    languages_url:
      'https://api.github.com/repos/domkoder/chartist-js/languages',
    stargazers_url:
      'https://api.github.com/repos/domkoder/chartist-js/stargazers',
    contributors_url:
      'https://api.github.com/repos/domkoder/chartist-js/contributors',
    subscribers_url:
      'https://api.github.com/repos/domkoder/chartist-js/subscribers',
    subscription_url:
      'https://api.github.com/repos/domkoder/chartist-js/subscription',
    commits_url:
      'https://api.github.com/repos/domkoder/chartist-js/commits{/sha}',
    git_commits_url:
      'https://api.github.com/repos/domkoder/chartist-js/git/commits{/sha}',
    comments_url:
      'https://api.github.com/repos/domkoder/chartist-js/comments{/number}',
    issue_comment_url:
      'https://api.github.com/repos/domkoder/chartist-js/issues/comments{/number}',
    contents_url:
      'https://api.github.com/repos/domkoder/chartist-js/contents/{+path}',
    compare_url:
      'https://api.github.com/repos/domkoder/chartist-js/compare/{base}...{head}',
    merges_url: 'https://api.github.com/repos/domkoder/chartist-js/merges',
    archive_url:
      'https://api.github.com/repos/domkoder/chartist-js/{archive_format}{/ref}',
    downloads_url:
      'https://api.github.com/repos/domkoder/chartist-js/downloads',
    issues_url:
      'https://api.github.com/repos/domkoder/chartist-js/issues{/number}',
    pulls_url:
      'https://api.github.com/repos/domkoder/chartist-js/pulls{/number}',
    milestones_url:
      'https://api.github.com/repos/domkoder/chartist-js/milestones{/number}',
    notifications_url:
      'https://api.github.com/repos/domkoder/chartist-js/notifications{?since,all,participating}',
    labels_url:
      'https://api.github.com/repos/domkoder/chartist-js/labels{/name}',
    releases_url:
      'https://api.github.com/repos/domkoder/chartist-js/releases{/id}',
    deployments_url:
      'https://api.github.com/repos/domkoder/chartist-js/deployments',
    created_at: '2021-06-09T14:45:37Z',
    updated_at: '2021-06-09T14:45:38Z',
    pushed_at: '2021-05-11T03:23:45Z',
    git_url: 'git://github.com/domkoder/chartist-js.git',
    ssh_url: 'git@github.com:domkoder/chartist-js.git',
    clone_url: 'https://github.com/domkoder/chartist-js.git',
    svn_url: 'https://github.com/domkoder/chartist-js',
    homepage: 'http://gionkunz.github.io/chartist-js/',
    size: 13428,
    stargazers_count: 0,
    watchers_count: 0,
    language: null,
    has_issues: false,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    forks_count: 0,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 0,
    license: {
      key: 'other',
      name: 'Other',
      spdx_id: 'NOASSERTION',
      url: null,
      node_id: 'MDc6TGljZW5zZTA=',
    },
    allow_forking: true,
    is_template: false,
    topics: [],
    visibility: 'public',
    forks: 0,
    open_issues: 0,
    watchers: 0,
    default_branch: 'develop',
  },
  {
    id: 391796319,
    node_id: 'MDEwOlJlcG9zaXRvcnkzOTE3OTYzMTk=',
    name: 'conquering-responsive-layouts',
    full_name: 'domkoder/conquering-responsive-layouts',
    private: false,
    owner: {
      login: 'domkoder',
      id: 23723199,
      node_id: 'MDQ6VXNlcjIzNzIzMTk5',
      avatar_url: 'https://avatars.githubusercontent.com/u/23723199?v=4',
      gravatar_id: '',
      url: 'https://api.github.com/users/domkoder',
      html_url: 'https://github.com/domkoder',
      followers_url: 'https://api.github.com/users/domkoder/followers',
      following_url:
        'https://api.github.com/users/domkoder/following{/other_user}',
      gists_url: 'https://api.github.com/users/domkoder/gists{/gist_id}',
      starred_url:
        'https://api.github.com/users/domkoder/starred{/owner}{/repo}',
      subscriptions_url: 'https://api.github.com/users/domkoder/subscriptions',
      organizations_url: 'https://api.github.com/users/domkoder/orgs',
      repos_url: 'https://api.github.com/users/domkoder/repos',
      events_url: 'https://api.github.com/users/domkoder/events{/privacy}',
      received_events_url:
        'https://api.github.com/users/domkoder/received_events',
      type: 'User',
      site_admin: false,
    },
    html_url: 'https://github.com/domkoder/conquering-responsive-layouts',
    description: null,
    fork: false,
    url: 'https://api.github.com/repos/domkoder/conquering-responsive-layouts',
    forks_url:
      'https://api.github.com/repos/domkoder/conquering-responsive-layouts/forks',
    keys_url:
      'https://api.github.com/repos/domkoder/conquering-responsive-layouts/keys{/key_id}',
    collaborators_url:
      'https://api.github.com/repos/domkoder/conquering-responsive-layouts/collaborators{/collaborator}',
    teams_url:
      'https://api.github.com/repos/domkoder/conquering-responsive-layouts/teams',
    hooks_url:
      'https://api.github.com/repos/domkoder/conquering-responsive-layouts/hooks',
    issue_events_url:
      'https://api.github.com/repos/domkoder/conquering-responsive-layouts/issues/events{/number}',
    events_url:
      'https://api.github.com/repos/domkoder/conquering-responsive-layouts/events',
    assignees_url:
      'https://api.github.com/repos/domkoder/conquering-responsive-layouts/assignees{/user}',
    branches_url:
      'https://api.github.com/repos/domkoder/conquering-responsive-layouts/branches{/branch}',
    tags_url:
      'https://api.github.com/repos/domkoder/conquering-responsive-layouts/tags',
    blobs_url:
      'https://api.github.com/repos/domkoder/conquering-responsive-layouts/git/blobs{/sha}',
    git_tags_url:
      'https://api.github.com/repos/domkoder/conquering-responsive-layouts/git/tags{/sha}',
    git_refs_url:
      'https://api.github.com/repos/domkoder/conquering-responsive-layouts/git/refs{/sha}',
    trees_url:
      'https://api.github.com/repos/domkoder/conquering-responsive-layouts/git/trees{/sha}',
    statuses_url:
      'https://api.github.com/repos/domkoder/conquering-responsive-layouts/statuses/{sha}',
    languages_url:
      'https://api.github.com/repos/domkoder/conquering-responsive-layouts/languages',
    stargazers_url:
      'https://api.github.com/repos/domkoder/conquering-responsive-layouts/stargazers',
    contributors_url:
      'https://api.github.com/repos/domkoder/conquering-responsive-layouts/contributors',
    subscribers_url:
      'https://api.github.com/repos/domkoder/conquering-responsive-layouts/subscribers',
    subscription_url:
      'https://api.github.com/repos/domkoder/conquering-responsive-layouts/subscription',
    commits_url:
      'https://api.github.com/repos/domkoder/conquering-responsive-layouts/commits{/sha}',
    git_commits_url:
      'https://api.github.com/repos/domkoder/conquering-responsive-layouts/git/commits{/sha}',
    comments_url:
      'https://api.github.com/repos/domkoder/conquering-responsive-layouts/comments{/number}',
    issue_comment_url:
      'https://api.github.com/repos/domkoder/conquering-responsive-layouts/issues/comments{/number}',
    contents_url:
      'https://api.github.com/repos/domkoder/conquering-responsive-layouts/contents/{+path}',
    compare_url:
      'https://api.github.com/repos/domkoder/conquering-responsive-layouts/compare/{base}...{head}',
    merges_url:
      'https://api.github.com/repos/domkoder/conquering-responsive-layouts/merges',
    archive_url:
      'https://api.github.com/repos/domkoder/conquering-responsive-layouts/{archive_format}{/ref}',
    downloads_url:
      'https://api.github.com/repos/domkoder/conquering-responsive-layouts/downloads',
    issues_url:
      'https://api.github.com/repos/domkoder/conquering-responsive-layouts/issues{/number}',
    pulls_url:
      'https://api.github.com/repos/domkoder/conquering-responsive-layouts/pulls{/number}',
    milestones_url:
      'https://api.github.com/repos/domkoder/conquering-responsive-layouts/milestones{/number}',
    notifications_url:
      'https://api.github.com/repos/domkoder/conquering-responsive-layouts/notifications{?since,all,participating}',
    labels_url:
      'https://api.github.com/repos/domkoder/conquering-responsive-layouts/labels{/name}',
    releases_url:
      'https://api.github.com/repos/domkoder/conquering-responsive-layouts/releases{/id}',
    deployments_url:
      'https://api.github.com/repos/domkoder/conquering-responsive-layouts/deployments',
    created_at: '2021-08-02T02:42:35Z',
    updated_at: '2021-08-02T02:45:05Z',
    pushed_at: '2021-08-02T02:45:01Z',
    git_url: 'git://github.com/domkoder/conquering-responsive-layouts.git',
    ssh_url: 'git@github.com:domkoder/conquering-responsive-layouts.git',
    clone_url: 'https://github.com/domkoder/conquering-responsive-layouts.git',
    svn_url: 'https://github.com/domkoder/conquering-responsive-layouts',
    homepage: null,
    size: 48177,
    stargazers_count: 0,
    watchers_count: 0,
    language: 'HTML',
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    forks_count: 0,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 0,
    license: null,
    allow_forking: true,
    is_template: false,
    topics: [],
    visibility: 'public',
    forks: 0,
    open_issues: 0,
    watchers: 0,
    default_branch: 'main',
  },
  {
    id: 241716049,
    node_id: 'MDEwOlJlcG9zaXRvcnkyNDE3MTYwNDk=',
    name: 'cortex',
    full_name: 'domkoder/cortex',
    private: false,
    owner: {
      login: 'domkoder',
      id: 23723199,
      node_id: 'MDQ6VXNlcjIzNzIzMTk5',
      avatar_url: 'https://avatars.githubusercontent.com/u/23723199?v=4',
      gravatar_id: '',
      url: 'https://api.github.com/users/domkoder',
      html_url: 'https://github.com/domkoder',
      followers_url: 'https://api.github.com/users/domkoder/followers',
      following_url:
        'https://api.github.com/users/domkoder/following{/other_user}',
      gists_url: 'https://api.github.com/users/domkoder/gists{/gist_id}',
      starred_url:
        'https://api.github.com/users/domkoder/starred{/owner}{/repo}',
      subscriptions_url: 'https://api.github.com/users/domkoder/subscriptions',
      organizations_url: 'https://api.github.com/users/domkoder/orgs',
      repos_url: 'https://api.github.com/users/domkoder/repos',
      events_url: 'https://api.github.com/users/domkoder/events{/privacy}',
      received_events_url:
        'https://api.github.com/users/domkoder/received_events',
      type: 'User',
      site_admin: false,
    },
    html_url: 'https://github.com/domkoder/cortex',
    description: null,
    fork: false,
    url: 'https://api.github.com/repos/domkoder/cortex',
    forks_url: 'https://api.github.com/repos/domkoder/cortex/forks',
    keys_url: 'https://api.github.com/repos/domkoder/cortex/keys{/key_id}',
    collaborators_url:
      'https://api.github.com/repos/domkoder/cortex/collaborators{/collaborator}',
    teams_url: 'https://api.github.com/repos/domkoder/cortex/teams',
    hooks_url: 'https://api.github.com/repos/domkoder/cortex/hooks',
    issue_events_url:
      'https://api.github.com/repos/domkoder/cortex/issues/events{/number}',
    events_url: 'https://api.github.com/repos/domkoder/cortex/events',
    assignees_url:
      'https://api.github.com/repos/domkoder/cortex/assignees{/user}',
    branches_url:
      'https://api.github.com/repos/domkoder/cortex/branches{/branch}',
    tags_url: 'https://api.github.com/repos/domkoder/cortex/tags',
    blobs_url: 'https://api.github.com/repos/domkoder/cortex/git/blobs{/sha}',
    git_tags_url: 'https://api.github.com/repos/domkoder/cortex/git/tags{/sha}',
    git_refs_url: 'https://api.github.com/repos/domkoder/cortex/git/refs{/sha}',
    trees_url: 'https://api.github.com/repos/domkoder/cortex/git/trees{/sha}',
    statuses_url: 'https://api.github.com/repos/domkoder/cortex/statuses/{sha}',
    languages_url: 'https://api.github.com/repos/domkoder/cortex/languages',
    stargazers_url: 'https://api.github.com/repos/domkoder/cortex/stargazers',
    contributors_url:
      'https://api.github.com/repos/domkoder/cortex/contributors',
    subscribers_url: 'https://api.github.com/repos/domkoder/cortex/subscribers',
    subscription_url:
      'https://api.github.com/repos/domkoder/cortex/subscription',
    commits_url: 'https://api.github.com/repos/domkoder/cortex/commits{/sha}',
    git_commits_url:
      'https://api.github.com/repos/domkoder/cortex/git/commits{/sha}',
    comments_url:
      'https://api.github.com/repos/domkoder/cortex/comments{/number}',
    issue_comment_url:
      'https://api.github.com/repos/domkoder/cortex/issues/comments{/number}',
    contents_url:
      'https://api.github.com/repos/domkoder/cortex/contents/{+path}',
    compare_url:
      'https://api.github.com/repos/domkoder/cortex/compare/{base}...{head}',
    merges_url: 'https://api.github.com/repos/domkoder/cortex/merges',
    archive_url:
      'https://api.github.com/repos/domkoder/cortex/{archive_format}{/ref}',
    downloads_url: 'https://api.github.com/repos/domkoder/cortex/downloads',
    issues_url: 'https://api.github.com/repos/domkoder/cortex/issues{/number}',
    pulls_url: 'https://api.github.com/repos/domkoder/cortex/pulls{/number}',
    milestones_url:
      'https://api.github.com/repos/domkoder/cortex/milestones{/number}',
    notifications_url:
      'https://api.github.com/repos/domkoder/cortex/notifications{?since,all,participating}',
    labels_url: 'https://api.github.com/repos/domkoder/cortex/labels{/name}',
    releases_url: 'https://api.github.com/repos/domkoder/cortex/releases{/id}',
    deployments_url: 'https://api.github.com/repos/domkoder/cortex/deployments',
    created_at: '2020-02-19T20:14:54Z',
    updated_at: '2020-02-19T20:36:47Z',
    pushed_at: '2021-08-12T01:02:30Z',
    git_url: 'git://github.com/domkoder/cortex.git',
    ssh_url: 'git@github.com:domkoder/cortex.git',
    clone_url: 'https://github.com/domkoder/cortex.git',
    svn_url: 'https://github.com/domkoder/cortex',
    homepage: null,
    size: 3376,
    stargazers_count: 0,
    watchers_count: 0,
    language: 'HTML',
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: true,
    forks_count: 0,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 6,
    license: null,
    allow_forking: true,
    is_template: false,
    topics: [],
    visibility: 'public',
    forks: 0,
    open_issues: 6,
    watchers: 0,
    default_branch: 'master',
  },
  {
    id: 255693950,
    node_id: 'MDEwOlJlcG9zaXRvcnkyNTU2OTM5NTA=',
    name: 'css-grid-playlist',
    full_name: 'domkoder/css-grid-playlist',
    private: false,
    owner: {
      login: 'domkoder',
      id: 23723199,
      node_id: 'MDQ6VXNlcjIzNzIzMTk5',
      avatar_url: 'https://avatars.githubusercontent.com/u/23723199?v=4',
      gravatar_id: '',
      url: 'https://api.github.com/users/domkoder',
      html_url: 'https://github.com/domkoder',
      followers_url: 'https://api.github.com/users/domkoder/followers',
      following_url:
        'https://api.github.com/users/domkoder/following{/other_user}',
      gists_url: 'https://api.github.com/users/domkoder/gists{/gist_id}',
      starred_url:
        'https://api.github.com/users/domkoder/starred{/owner}{/repo}',
      subscriptions_url: 'https://api.github.com/users/domkoder/subscriptions',
      organizations_url: 'https://api.github.com/users/domkoder/orgs',
      repos_url: 'https://api.github.com/users/domkoder/repos',
      events_url: 'https://api.github.com/users/domkoder/events{/privacy}',
      received_events_url:
        'https://api.github.com/users/domkoder/received_events',
      type: 'User',
      site_admin: false,
    },
    html_url: 'https://github.com/domkoder/css-grid-playlist',
    description:
      'Course files for the CSS Grid playlist on The Net Ninja YouTube channel.',
    fork: true,
    url: 'https://api.github.com/repos/domkoder/css-grid-playlist',
    forks_url: 'https://api.github.com/repos/domkoder/css-grid-playlist/forks',
    keys_url:
      'https://api.github.com/repos/domkoder/css-grid-playlist/keys{/key_id}',
    collaborators_url:
      'https://api.github.com/repos/domkoder/css-grid-playlist/collaborators{/collaborator}',
    teams_url: 'https://api.github.com/repos/domkoder/css-grid-playlist/teams',
    hooks_url: 'https://api.github.com/repos/domkoder/css-grid-playlist/hooks',
    issue_events_url:
      'https://api.github.com/repos/domkoder/css-grid-playlist/issues/events{/number}',
    events_url:
      'https://api.github.com/repos/domkoder/css-grid-playlist/events',
    assignees_url:
      'https://api.github.com/repos/domkoder/css-grid-playlist/assignees{/user}',
    branches_url:
      'https://api.github.com/repos/domkoder/css-grid-playlist/branches{/branch}',
    tags_url: 'https://api.github.com/repos/domkoder/css-grid-playlist/tags',
    blobs_url:
      'https://api.github.com/repos/domkoder/css-grid-playlist/git/blobs{/sha}',
    git_tags_url:
      'https://api.github.com/repos/domkoder/css-grid-playlist/git/tags{/sha}',
    git_refs_url:
      'https://api.github.com/repos/domkoder/css-grid-playlist/git/refs{/sha}',
    trees_url:
      'https://api.github.com/repos/domkoder/css-grid-playlist/git/trees{/sha}',
    statuses_url:
      'https://api.github.com/repos/domkoder/css-grid-playlist/statuses/{sha}',
    languages_url:
      'https://api.github.com/repos/domkoder/css-grid-playlist/languages',
    stargazers_url:
      'https://api.github.com/repos/domkoder/css-grid-playlist/stargazers',
    contributors_url:
      'https://api.github.com/repos/domkoder/css-grid-playlist/contributors',
    subscribers_url:
      'https://api.github.com/repos/domkoder/css-grid-playlist/subscribers',
    subscription_url:
      'https://api.github.com/repos/domkoder/css-grid-playlist/subscription',
    commits_url:
      'https://api.github.com/repos/domkoder/css-grid-playlist/commits{/sha}',
    git_commits_url:
      'https://api.github.com/repos/domkoder/css-grid-playlist/git/commits{/sha}',
    comments_url:
      'https://api.github.com/repos/domkoder/css-grid-playlist/comments{/number}',
    issue_comment_url:
      'https://api.github.com/repos/domkoder/css-grid-playlist/issues/comments{/number}',
    contents_url:
      'https://api.github.com/repos/domkoder/css-grid-playlist/contents/{+path}',
    compare_url:
      'https://api.github.com/repos/domkoder/css-grid-playlist/compare/{base}...{head}',
    merges_url:
      'https://api.github.com/repos/domkoder/css-grid-playlist/merges',
    archive_url:
      'https://api.github.com/repos/domkoder/css-grid-playlist/{archive_format}{/ref}',
    downloads_url:
      'https://api.github.com/repos/domkoder/css-grid-playlist/downloads',
    issues_url:
      'https://api.github.com/repos/domkoder/css-grid-playlist/issues{/number}',
    pulls_url:
      'https://api.github.com/repos/domkoder/css-grid-playlist/pulls{/number}',
    milestones_url:
      'https://api.github.com/repos/domkoder/css-grid-playlist/milestones{/number}',
    notifications_url:
      'https://api.github.com/repos/domkoder/css-grid-playlist/notifications{?since,all,participating}',
    labels_url:
      'https://api.github.com/repos/domkoder/css-grid-playlist/labels{/name}',
    releases_url:
      'https://api.github.com/repos/domkoder/css-grid-playlist/releases{/id}',
    deployments_url:
      'https://api.github.com/repos/domkoder/css-grid-playlist/deployments',
    created_at: '2020-04-14T18:35:53Z',
    updated_at: '2020-04-14T18:35:55Z',
    pushed_at: '2019-09-15T05:50:42Z',
    git_url: 'git://github.com/domkoder/css-grid-playlist.git',
    ssh_url: 'git@github.com:domkoder/css-grid-playlist.git',
    clone_url: 'https://github.com/domkoder/css-grid-playlist.git',
    svn_url: 'https://github.com/domkoder/css-grid-playlist',
    homepage: null,
    size: 7,
    stargazers_count: 0,
    watchers_count: 0,
    language: null,
    has_issues: false,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    forks_count: 0,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 0,
    license: null,
    allow_forking: true,
    is_template: false,
    topics: [],
    visibility: 'public',
    forks: 0,
    open_issues: 0,
    watchers: 0,
    default_branch: 'master',
  },
  {
    id: 391804393,
    node_id: 'MDEwOlJlcG9zaXRvcnkzOTE4MDQzOTM=',
    name: 'devcon',
    full_name: 'domkoder/devcon',
    private: false,
    owner: {
      login: 'domkoder',
      id: 23723199,
      node_id: 'MDQ6VXNlcjIzNzIzMTk5',
      avatar_url: 'https://avatars.githubusercontent.com/u/23723199?v=4',
      gravatar_id: '',
      url: 'https://api.github.com/users/domkoder',
      html_url: 'https://github.com/domkoder',
      followers_url: 'https://api.github.com/users/domkoder/followers',
      following_url:
        'https://api.github.com/users/domkoder/following{/other_user}',
      gists_url: 'https://api.github.com/users/domkoder/gists{/gist_id}',
      starred_url:
        'https://api.github.com/users/domkoder/starred{/owner}{/repo}',
      subscriptions_url: 'https://api.github.com/users/domkoder/subscriptions',
      organizations_url: 'https://api.github.com/users/domkoder/orgs',
      repos_url: 'https://api.github.com/users/domkoder/repos',
      events_url: 'https://api.github.com/users/domkoder/events{/privacy}',
      received_events_url:
        'https://api.github.com/users/domkoder/received_events',
      type: 'User',
      site_admin: false,
    },
    html_url: 'https://github.com/domkoder/devcon',
    description: null,
    fork: false,
    url: 'https://api.github.com/repos/domkoder/devcon',
    forks_url: 'https://api.github.com/repos/domkoder/devcon/forks',
    keys_url: 'https://api.github.com/repos/domkoder/devcon/keys{/key_id}',
    collaborators_url:
      'https://api.github.com/repos/domkoder/devcon/collaborators{/collaborator}',
    teams_url: 'https://api.github.com/repos/domkoder/devcon/teams',
    hooks_url: 'https://api.github.com/repos/domkoder/devcon/hooks',
    issue_events_url:
      'https://api.github.com/repos/domkoder/devcon/issues/events{/number}',
    events_url: 'https://api.github.com/repos/domkoder/devcon/events',
    assignees_url:
      'https://api.github.com/repos/domkoder/devcon/assignees{/user}',
    branches_url:
      'https://api.github.com/repos/domkoder/devcon/branches{/branch}',
    tags_url: 'https://api.github.com/repos/domkoder/devcon/tags',
    blobs_url: 'https://api.github.com/repos/domkoder/devcon/git/blobs{/sha}',
    git_tags_url: 'https://api.github.com/repos/domkoder/devcon/git/tags{/sha}',
    git_refs_url: 'https://api.github.com/repos/domkoder/devcon/git/refs{/sha}',
    trees_url: 'https://api.github.com/repos/domkoder/devcon/git/trees{/sha}',
    statuses_url: 'https://api.github.com/repos/domkoder/devcon/statuses/{sha}',
    languages_url: 'https://api.github.com/repos/domkoder/devcon/languages',
    stargazers_url: 'https://api.github.com/repos/domkoder/devcon/stargazers',
    contributors_url:
      'https://api.github.com/repos/domkoder/devcon/contributors',
    subscribers_url: 'https://api.github.com/repos/domkoder/devcon/subscribers',
    subscription_url:
      'https://api.github.com/repos/domkoder/devcon/subscription',
    commits_url: 'https://api.github.com/repos/domkoder/devcon/commits{/sha}',
    git_commits_url:
      'https://api.github.com/repos/domkoder/devcon/git/commits{/sha}',
    comments_url:
      'https://api.github.com/repos/domkoder/devcon/comments{/number}',
    issue_comment_url:
      'https://api.github.com/repos/domkoder/devcon/issues/comments{/number}',
    contents_url:
      'https://api.github.com/repos/domkoder/devcon/contents/{+path}',
    compare_url:
      'https://api.github.com/repos/domkoder/devcon/compare/{base}...{head}',
    merges_url: 'https://api.github.com/repos/domkoder/devcon/merges',
    archive_url:
      'https://api.github.com/repos/domkoder/devcon/{archive_format}{/ref}',
    downloads_url: 'https://api.github.com/repos/domkoder/devcon/downloads',
    issues_url: 'https://api.github.com/repos/domkoder/devcon/issues{/number}',
    pulls_url: 'https://api.github.com/repos/domkoder/devcon/pulls{/number}',
    milestones_url:
      'https://api.github.com/repos/domkoder/devcon/milestones{/number}',
    notifications_url:
      'https://api.github.com/repos/domkoder/devcon/notifications{?since,all,participating}',
    labels_url: 'https://api.github.com/repos/domkoder/devcon/labels{/name}',
    releases_url: 'https://api.github.com/repos/domkoder/devcon/releases{/id}',
    deployments_url: 'https://api.github.com/repos/domkoder/devcon/deployments',
    created_at: '2021-08-02T03:27:50Z',
    updated_at: '2021-08-02T03:30:55Z',
    pushed_at: '2021-08-02T03:30:52Z',
    git_url: 'git://github.com/domkoder/devcon.git',
    ssh_url: 'git@github.com:domkoder/devcon.git',
    clone_url: 'https://github.com/domkoder/devcon.git',
    svn_url: 'https://github.com/domkoder/devcon',
    homepage: null,
    size: 118,
    stargazers_count: 0,
    watchers_count: 0,
    language: 'SCSS',
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    forks_count: 0,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 0,
    license: null,
    allow_forking: true,
    is_template: false,
    topics: [],
    visibility: 'public',
    forks: 0,
    open_issues: 0,
    watchers: 0,
    default_branch: 'main',
  },
  {
    id: 478831778,
    node_id: 'R_kgDOHIpkog',
    name: 'domkoder',
    full_name: 'domkoder/domkoder',
    private: false,
    owner: {
      login: 'domkoder',
      id: 23723199,
      node_id: 'MDQ6VXNlcjIzNzIzMTk5',
      avatar_url: 'https://avatars.githubusercontent.com/u/23723199?v=4',
      gravatar_id: '',
      url: 'https://api.github.com/users/domkoder',
      html_url: 'https://github.com/domkoder',
      followers_url: 'https://api.github.com/users/domkoder/followers',
      following_url:
        'https://api.github.com/users/domkoder/following{/other_user}',
      gists_url: 'https://api.github.com/users/domkoder/gists{/gist_id}',
      starred_url:
        'https://api.github.com/users/domkoder/starred{/owner}{/repo}',
      subscriptions_url: 'https://api.github.com/users/domkoder/subscriptions',
      organizations_url: 'https://api.github.com/users/domkoder/orgs',
      repos_url: 'https://api.github.com/users/domkoder/repos',
      events_url: 'https://api.github.com/users/domkoder/events{/privacy}',
      received_events_url:
        'https://api.github.com/users/domkoder/received_events',
      type: 'User',
      site_admin: false,
    },
    html_url: 'https://github.com/domkoder/domkoder',
    description: null,
    fork: false,
    url: 'https://api.github.com/repos/domkoder/domkoder',
    forks_url: 'https://api.github.com/repos/domkoder/domkoder/forks',
    keys_url: 'https://api.github.com/repos/domkoder/domkoder/keys{/key_id}',
    collaborators_url:
      'https://api.github.com/repos/domkoder/domkoder/collaborators{/collaborator}',
    teams_url: 'https://api.github.com/repos/domkoder/domkoder/teams',
    hooks_url: 'https://api.github.com/repos/domkoder/domkoder/hooks',
    issue_events_url:
      'https://api.github.com/repos/domkoder/domkoder/issues/events{/number}',
    events_url: 'https://api.github.com/repos/domkoder/domkoder/events',
    assignees_url:
      'https://api.github.com/repos/domkoder/domkoder/assignees{/user}',
    branches_url:
      'https://api.github.com/repos/domkoder/domkoder/branches{/branch}',
    tags_url: 'https://api.github.com/repos/domkoder/domkoder/tags',
    blobs_url: 'https://api.github.com/repos/domkoder/domkoder/git/blobs{/sha}',
    git_tags_url:
      'https://api.github.com/repos/domkoder/domkoder/git/tags{/sha}',
    git_refs_url:
      'https://api.github.com/repos/domkoder/domkoder/git/refs{/sha}',
    trees_url: 'https://api.github.com/repos/domkoder/domkoder/git/trees{/sha}',
    statuses_url:
      'https://api.github.com/repos/domkoder/domkoder/statuses/{sha}',
    languages_url: 'https://api.github.com/repos/domkoder/domkoder/languages',
    stargazers_url: 'https://api.github.com/repos/domkoder/domkoder/stargazers',
    contributors_url:
      'https://api.github.com/repos/domkoder/domkoder/contributors',
    subscribers_url:
      'https://api.github.com/repos/domkoder/domkoder/subscribers',
    subscription_url:
      'https://api.github.com/repos/domkoder/domkoder/subscription',
    commits_url: 'https://api.github.com/repos/domkoder/domkoder/commits{/sha}',
    git_commits_url:
      'https://api.github.com/repos/domkoder/domkoder/git/commits{/sha}',
    comments_url:
      'https://api.github.com/repos/domkoder/domkoder/comments{/number}',
    issue_comment_url:
      'https://api.github.com/repos/domkoder/domkoder/issues/comments{/number}',
    contents_url:
      'https://api.github.com/repos/domkoder/domkoder/contents/{+path}',
    compare_url:
      'https://api.github.com/repos/domkoder/domkoder/compare/{base}...{head}',
    merges_url: 'https://api.github.com/repos/domkoder/domkoder/merges',
    archive_url:
      'https://api.github.com/repos/domkoder/domkoder/{archive_format}{/ref}',
    downloads_url: 'https://api.github.com/repos/domkoder/domkoder/downloads',
    issues_url:
      'https://api.github.com/repos/domkoder/domkoder/issues{/number}',
    pulls_url: 'https://api.github.com/repos/domkoder/domkoder/pulls{/number}',
    milestones_url:
      'https://api.github.com/repos/domkoder/domkoder/milestones{/number}',
    notifications_url:
      'https://api.github.com/repos/domkoder/domkoder/notifications{?since,all,participating}',
    labels_url: 'https://api.github.com/repos/domkoder/domkoder/labels{/name}',
    releases_url:
      'https://api.github.com/repos/domkoder/domkoder/releases{/id}',
    deployments_url:
      'https://api.github.com/repos/domkoder/domkoder/deployments',
    created_at: '2022-04-07T04:53:28Z',
    updated_at: '2022-04-07T04:53:28Z',
    pushed_at: '2022-04-07T04:53:29Z',
    git_url: 'git://github.com/domkoder/domkoder.git',
    ssh_url: 'git@github.com:domkoder/domkoder.git',
    clone_url: 'https://github.com/domkoder/domkoder.git',
    svn_url: 'https://github.com/domkoder/domkoder',
    homepage: null,
    size: 0,
    stargazers_count: 0,
    watchers_count: 0,
    language: null,
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    forks_count: 0,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 0,
    license: null,
    allow_forking: true,
    is_template: false,
    topics: [],
    visibility: 'public',
    forks: 0,
    open_issues: 0,
    watchers: 0,
    default_branch: 'main',
  },
  {
    id: 475689352,
    node_id: 'R_kgDOHFpxiA',
    name: 'done-with-it',
    full_name: 'domkoder/done-with-it',
    private: false,
    owner: {
      login: 'domkoder',
      id: 23723199,
      node_id: 'MDQ6VXNlcjIzNzIzMTk5',
      avatar_url: 'https://avatars.githubusercontent.com/u/23723199?v=4',
      gravatar_id: '',
      url: 'https://api.github.com/users/domkoder',
      html_url: 'https://github.com/domkoder',
      followers_url: 'https://api.github.com/users/domkoder/followers',
      following_url:
        'https://api.github.com/users/domkoder/following{/other_user}',
      gists_url: 'https://api.github.com/users/domkoder/gists{/gist_id}',
      starred_url:
        'https://api.github.com/users/domkoder/starred{/owner}{/repo}',
      subscriptions_url: 'https://api.github.com/users/domkoder/subscriptions',
      organizations_url: 'https://api.github.com/users/domkoder/orgs',
      repos_url: 'https://api.github.com/users/domkoder/repos',
      events_url: 'https://api.github.com/users/domkoder/events{/privacy}',
      received_events_url:
        'https://api.github.com/users/domkoder/received_events',
      type: 'User',
      site_admin: false,
    },
    html_url: 'https://github.com/domkoder/done-with-it',
    description: null,
    fork: false,
    url: 'https://api.github.com/repos/domkoder/done-with-it',
    forks_url: 'https://api.github.com/repos/domkoder/done-with-it/forks',
    keys_url:
      'https://api.github.com/repos/domkoder/done-with-it/keys{/key_id}',
    collaborators_url:
      'https://api.github.com/repos/domkoder/done-with-it/collaborators{/collaborator}',
    teams_url: 'https://api.github.com/repos/domkoder/done-with-it/teams',
    hooks_url: 'https://api.github.com/repos/domkoder/done-with-it/hooks',
    issue_events_url:
      'https://api.github.com/repos/domkoder/done-with-it/issues/events{/number}',
    events_url: 'https://api.github.com/repos/domkoder/done-with-it/events',
    assignees_url:
      'https://api.github.com/repos/domkoder/done-with-it/assignees{/user}',
    branches_url:
      'https://api.github.com/repos/domkoder/done-with-it/branches{/branch}',
    tags_url: 'https://api.github.com/repos/domkoder/done-with-it/tags',
    blobs_url:
      'https://api.github.com/repos/domkoder/done-with-it/git/blobs{/sha}',
    git_tags_url:
      'https://api.github.com/repos/domkoder/done-with-it/git/tags{/sha}',
    git_refs_url:
      'https://api.github.com/repos/domkoder/done-with-it/git/refs{/sha}',
    trees_url:
      'https://api.github.com/repos/domkoder/done-with-it/git/trees{/sha}',
    statuses_url:
      'https://api.github.com/repos/domkoder/done-with-it/statuses/{sha}',
    languages_url:
      'https://api.github.com/repos/domkoder/done-with-it/languages',
    stargazers_url:
      'https://api.github.com/repos/domkoder/done-with-it/stargazers',
    contributors_url:
      'https://api.github.com/repos/domkoder/done-with-it/contributors',
    subscribers_url:
      'https://api.github.com/repos/domkoder/done-with-it/subscribers',
    subscription_url:
      'https://api.github.com/repos/domkoder/done-with-it/subscription',
    commits_url:
      'https://api.github.com/repos/domkoder/done-with-it/commits{/sha}',
    git_commits_url:
      'https://api.github.com/repos/domkoder/done-with-it/git/commits{/sha}',
    comments_url:
      'https://api.github.com/repos/domkoder/done-with-it/comments{/number}',
    issue_comment_url:
      'https://api.github.com/repos/domkoder/done-with-it/issues/comments{/number}',
    contents_url:
      'https://api.github.com/repos/domkoder/done-with-it/contents/{+path}',
    compare_url:
      'https://api.github.com/repos/domkoder/done-with-it/compare/{base}...{head}',
    merges_url: 'https://api.github.com/repos/domkoder/done-with-it/merges',
    archive_url:
      'https://api.github.com/repos/domkoder/done-with-it/{archive_format}{/ref}',
    downloads_url:
      'https://api.github.com/repos/domkoder/done-with-it/downloads',
    issues_url:
      'https://api.github.com/repos/domkoder/done-with-it/issues{/number}',
    pulls_url:
      'https://api.github.com/repos/domkoder/done-with-it/pulls{/number}',
    milestones_url:
      'https://api.github.com/repos/domkoder/done-with-it/milestones{/number}',
    notifications_url:
      'https://api.github.com/repos/domkoder/done-with-it/notifications{?since,all,participating}',
    labels_url:
      'https://api.github.com/repos/domkoder/done-with-it/labels{/name}',
    releases_url:
      'https://api.github.com/repos/domkoder/done-with-it/releases{/id}',
    deployments_url:
      'https://api.github.com/repos/domkoder/done-with-it/deployments',
    created_at: '2022-03-30T02:23:22Z',
    updated_at: '2022-03-31T03:57:40Z',
    pushed_at: '2022-03-30T02:26:30Z',
    git_url: 'git://github.com/domkoder/done-with-it.git',
    ssh_url: 'git@github.com:domkoder/done-with-it.git',
    clone_url: 'https://github.com/domkoder/done-with-it.git',
    svn_url: 'https://github.com/domkoder/done-with-it',
    homepage: null,
    size: 2162,
    stargazers_count: 1,
    watchers_count: 1,
    language: 'JavaScript',
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    forks_count: 0,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 0,
    license: null,
    allow_forking: true,
    is_template: false,
    topics: [],
    visibility: 'public',
    forks: 0,
    open_issues: 0,
    watchers: 1,
    default_branch: 'main',
  },
  {
    id: 232929615,
    node_id: 'MDEwOlJlcG9zaXRvcnkyMzI5Mjk2MTU=',
    name: 'dropdown',
    full_name: 'domkoder/dropdown',
    private: false,
    owner: {
      login: 'domkoder',
      id: 23723199,
      node_id: 'MDQ6VXNlcjIzNzIzMTk5',
      avatar_url: 'https://avatars.githubusercontent.com/u/23723199?v=4',
      gravatar_id: '',
      url: 'https://api.github.com/users/domkoder',
      html_url: 'https://github.com/domkoder',
      followers_url: 'https://api.github.com/users/domkoder/followers',
      following_url:
        'https://api.github.com/users/domkoder/following{/other_user}',
      gists_url: 'https://api.github.com/users/domkoder/gists{/gist_id}',
      starred_url:
        'https://api.github.com/users/domkoder/starred{/owner}{/repo}',
      subscriptions_url: 'https://api.github.com/users/domkoder/subscriptions',
      organizations_url: 'https://api.github.com/users/domkoder/orgs',
      repos_url: 'https://api.github.com/users/domkoder/repos',
      events_url: 'https://api.github.com/users/domkoder/events{/privacy}',
      received_events_url:
        'https://api.github.com/users/domkoder/received_events',
      type: 'User',
      site_admin: false,
    },
    html_url: 'https://github.com/domkoder/dropdown',
    description: 'CSS dropdown menu',
    fork: false,
    url: 'https://api.github.com/repos/domkoder/dropdown',
    forks_url: 'https://api.github.com/repos/domkoder/dropdown/forks',
    keys_url: 'https://api.github.com/repos/domkoder/dropdown/keys{/key_id}',
    collaborators_url:
      'https://api.github.com/repos/domkoder/dropdown/collaborators{/collaborator}',
    teams_url: 'https://api.github.com/repos/domkoder/dropdown/teams',
    hooks_url: 'https://api.github.com/repos/domkoder/dropdown/hooks',
    issue_events_url:
      'https://api.github.com/repos/domkoder/dropdown/issues/events{/number}',
    events_url: 'https://api.github.com/repos/domkoder/dropdown/events',
    assignees_url:
      'https://api.github.com/repos/domkoder/dropdown/assignees{/user}',
    branches_url:
      'https://api.github.com/repos/domkoder/dropdown/branches{/branch}',
    tags_url: 'https://api.github.com/repos/domkoder/dropdown/tags',
    blobs_url: 'https://api.github.com/repos/domkoder/dropdown/git/blobs{/sha}',
    git_tags_url:
      'https://api.github.com/repos/domkoder/dropdown/git/tags{/sha}',
    git_refs_url:
      'https://api.github.com/repos/domkoder/dropdown/git/refs{/sha}',
    trees_url: 'https://api.github.com/repos/domkoder/dropdown/git/trees{/sha}',
    statuses_url:
      'https://api.github.com/repos/domkoder/dropdown/statuses/{sha}',
    languages_url: 'https://api.github.com/repos/domkoder/dropdown/languages',
    stargazers_url: 'https://api.github.com/repos/domkoder/dropdown/stargazers',
    contributors_url:
      'https://api.github.com/repos/domkoder/dropdown/contributors',
    subscribers_url:
      'https://api.github.com/repos/domkoder/dropdown/subscribers',
    subscription_url:
      'https://api.github.com/repos/domkoder/dropdown/subscription',
    commits_url: 'https://api.github.com/repos/domkoder/dropdown/commits{/sha}',
    git_commits_url:
      'https://api.github.com/repos/domkoder/dropdown/git/commits{/sha}',
    comments_url:
      'https://api.github.com/repos/domkoder/dropdown/comments{/number}',
    issue_comment_url:
      'https://api.github.com/repos/domkoder/dropdown/issues/comments{/number}',
    contents_url:
      'https://api.github.com/repos/domkoder/dropdown/contents/{+path}',
    compare_url:
      'https://api.github.com/repos/domkoder/dropdown/compare/{base}...{head}',
    merges_url: 'https://api.github.com/repos/domkoder/dropdown/merges',
    archive_url:
      'https://api.github.com/repos/domkoder/dropdown/{archive_format}{/ref}',
    downloads_url: 'https://api.github.com/repos/domkoder/dropdown/downloads',
    issues_url:
      'https://api.github.com/repos/domkoder/dropdown/issues{/number}',
    pulls_url: 'https://api.github.com/repos/domkoder/dropdown/pulls{/number}',
    milestones_url:
      'https://api.github.com/repos/domkoder/dropdown/milestones{/number}',
    notifications_url:
      'https://api.github.com/repos/domkoder/dropdown/notifications{?since,all,participating}',
    labels_url: 'https://api.github.com/repos/domkoder/dropdown/labels{/name}',
    releases_url:
      'https://api.github.com/repos/domkoder/dropdown/releases{/id}',
    deployments_url:
      'https://api.github.com/repos/domkoder/dropdown/deployments',
    created_at: '2020-01-09T23:59:17Z',
    updated_at: '2020-04-15T18:33:45Z',
    pushed_at: '2020-01-10T00:02:45Z',
    git_url: 'git://github.com/domkoder/dropdown.git',
    ssh_url: 'git@github.com:domkoder/dropdown.git',
    clone_url: 'https://github.com/domkoder/dropdown.git',
    svn_url: 'https://github.com/domkoder/dropdown',
    homepage: null,
    size: 1,
    stargazers_count: 0,
    watchers_count: 0,
    language: 'CSS',
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    forks_count: 0,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 0,
    license: null,
    allow_forking: true,
    is_template: false,
    topics: [],
    visibility: 'public',
    forks: 0,
    open_issues: 0,
    watchers: 0,
    default_branch: 'master',
  },
  {
    id: 244023062,
    node_id: 'MDEwOlJlcG9zaXRvcnkyNDQwMjMwNjI=',
    name: 'eleser',
    full_name: 'domkoder/eleser',
    private: false,
    owner: {
      login: 'domkoder',
      id: 23723199,
      node_id: 'MDQ6VXNlcjIzNzIzMTk5',
      avatar_url: 'https://avatars.githubusercontent.com/u/23723199?v=4',
      gravatar_id: '',
      url: 'https://api.github.com/users/domkoder',
      html_url: 'https://github.com/domkoder',
      followers_url: 'https://api.github.com/users/domkoder/followers',
      following_url:
        'https://api.github.com/users/domkoder/following{/other_user}',
      gists_url: 'https://api.github.com/users/domkoder/gists{/gist_id}',
      starred_url:
        'https://api.github.com/users/domkoder/starred{/owner}{/repo}',
      subscriptions_url: 'https://api.github.com/users/domkoder/subscriptions',
      organizations_url: 'https://api.github.com/users/domkoder/orgs',
      repos_url: 'https://api.github.com/users/domkoder/repos',
      events_url: 'https://api.github.com/users/domkoder/events{/privacy}',
      received_events_url:
        'https://api.github.com/users/domkoder/received_events',
      type: 'User',
      site_admin: false,
    },
    html_url: 'https://github.com/domkoder/eleser',
    description: 'Cooming soon page',
    fork: false,
    url: 'https://api.github.com/repos/domkoder/eleser',
    forks_url: 'https://api.github.com/repos/domkoder/eleser/forks',
    keys_url: 'https://api.github.com/repos/domkoder/eleser/keys{/key_id}',
    collaborators_url:
      'https://api.github.com/repos/domkoder/eleser/collaborators{/collaborator}',
    teams_url: 'https://api.github.com/repos/domkoder/eleser/teams',
    hooks_url: 'https://api.github.com/repos/domkoder/eleser/hooks',
    issue_events_url:
      'https://api.github.com/repos/domkoder/eleser/issues/events{/number}',
    events_url: 'https://api.github.com/repos/domkoder/eleser/events',
    assignees_url:
      'https://api.github.com/repos/domkoder/eleser/assignees{/user}',
    branches_url:
      'https://api.github.com/repos/domkoder/eleser/branches{/branch}',
    tags_url: 'https://api.github.com/repos/domkoder/eleser/tags',
    blobs_url: 'https://api.github.com/repos/domkoder/eleser/git/blobs{/sha}',
    git_tags_url: 'https://api.github.com/repos/domkoder/eleser/git/tags{/sha}',
    git_refs_url: 'https://api.github.com/repos/domkoder/eleser/git/refs{/sha}',
    trees_url: 'https://api.github.com/repos/domkoder/eleser/git/trees{/sha}',
    statuses_url: 'https://api.github.com/repos/domkoder/eleser/statuses/{sha}',
    languages_url: 'https://api.github.com/repos/domkoder/eleser/languages',
    stargazers_url: 'https://api.github.com/repos/domkoder/eleser/stargazers',
    contributors_url:
      'https://api.github.com/repos/domkoder/eleser/contributors',
    subscribers_url: 'https://api.github.com/repos/domkoder/eleser/subscribers',
    subscription_url:
      'https://api.github.com/repos/domkoder/eleser/subscription',
    commits_url: 'https://api.github.com/repos/domkoder/eleser/commits{/sha}',
    git_commits_url:
      'https://api.github.com/repos/domkoder/eleser/git/commits{/sha}',
    comments_url:
      'https://api.github.com/repos/domkoder/eleser/comments{/number}',
    issue_comment_url:
      'https://api.github.com/repos/domkoder/eleser/issues/comments{/number}',
    contents_url:
      'https://api.github.com/repos/domkoder/eleser/contents/{+path}',
    compare_url:
      'https://api.github.com/repos/domkoder/eleser/compare/{base}...{head}',
    merges_url: 'https://api.github.com/repos/domkoder/eleser/merges',
    archive_url:
      'https://api.github.com/repos/domkoder/eleser/{archive_format}{/ref}',
    downloads_url: 'https://api.github.com/repos/domkoder/eleser/downloads',
    issues_url: 'https://api.github.com/repos/domkoder/eleser/issues{/number}',
    pulls_url: 'https://api.github.com/repos/domkoder/eleser/pulls{/number}',
    milestones_url:
      'https://api.github.com/repos/domkoder/eleser/milestones{/number}',
    notifications_url:
      'https://api.github.com/repos/domkoder/eleser/notifications{?since,all,participating}',
    labels_url: 'https://api.github.com/repos/domkoder/eleser/labels{/name}',
    releases_url: 'https://api.github.com/repos/domkoder/eleser/releases{/id}',
    deployments_url: 'https://api.github.com/repos/domkoder/eleser/deployments',
    created_at: '2020-02-29T18:46:22Z',
    updated_at: '2020-04-12T22:49:08Z',
    pushed_at: '2020-04-12T22:49:06Z',
    git_url: 'git://github.com/domkoder/eleser.git',
    ssh_url: 'git@github.com:domkoder/eleser.git',
    clone_url: 'https://github.com/domkoder/eleser.git',
    svn_url: 'https://github.com/domkoder/eleser',
    homepage: null,
    size: 304,
    stargazers_count: 1,
    watchers_count: 1,
    language: 'CSS',
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: true,
    forks_count: 1,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 0,
    license: null,
    allow_forking: true,
    is_template: false,
    topics: [],
    visibility: 'public',
    forks: 1,
    open_issues: 0,
    watchers: 1,
    default_branch: 'master',
  },
  {
    id: 232683580,
    node_id: 'MDEwOlJlcG9zaXRvcnkyMzI2ODM1ODA=',
    name: 'four-card',
    full_name: 'domkoder/four-card',
    private: false,
    owner: {
      login: 'domkoder',
      id: 23723199,
      node_id: 'MDQ6VXNlcjIzNzIzMTk5',
      avatar_url: 'https://avatars.githubusercontent.com/u/23723199?v=4',
      gravatar_id: '',
      url: 'https://api.github.com/users/domkoder',
      html_url: 'https://github.com/domkoder',
      followers_url: 'https://api.github.com/users/domkoder/followers',
      following_url:
        'https://api.github.com/users/domkoder/following{/other_user}',
      gists_url: 'https://api.github.com/users/domkoder/gists{/gist_id}',
      starred_url:
        'https://api.github.com/users/domkoder/starred{/owner}{/repo}',
      subscriptions_url: 'https://api.github.com/users/domkoder/subscriptions',
      organizations_url: 'https://api.github.com/users/domkoder/orgs',
      repos_url: 'https://api.github.com/users/domkoder/repos',
      events_url: 'https://api.github.com/users/domkoder/events{/privacy}',
      received_events_url:
        'https://api.github.com/users/domkoder/received_events',
      type: 'User',
      site_admin: false,
    },
    html_url: 'https://github.com/domkoder/four-card',
    description: 'A nice multi-column responsive layout-based challenge.',
    fork: false,
    url: 'https://api.github.com/repos/domkoder/four-card',
    forks_url: 'https://api.github.com/repos/domkoder/four-card/forks',
    keys_url: 'https://api.github.com/repos/domkoder/four-card/keys{/key_id}',
    collaborators_url:
      'https://api.github.com/repos/domkoder/four-card/collaborators{/collaborator}',
    teams_url: 'https://api.github.com/repos/domkoder/four-card/teams',
    hooks_url: 'https://api.github.com/repos/domkoder/four-card/hooks',
    issue_events_url:
      'https://api.github.com/repos/domkoder/four-card/issues/events{/number}',
    events_url: 'https://api.github.com/repos/domkoder/four-card/events',
    assignees_url:
      'https://api.github.com/repos/domkoder/four-card/assignees{/user}',
    branches_url:
      'https://api.github.com/repos/domkoder/four-card/branches{/branch}',
    tags_url: 'https://api.github.com/repos/domkoder/four-card/tags',
    blobs_url:
      'https://api.github.com/repos/domkoder/four-card/git/blobs{/sha}',
    git_tags_url:
      'https://api.github.com/repos/domkoder/four-card/git/tags{/sha}',
    git_refs_url:
      'https://api.github.com/repos/domkoder/four-card/git/refs{/sha}',
    trees_url:
      'https://api.github.com/repos/domkoder/four-card/git/trees{/sha}',
    statuses_url:
      'https://api.github.com/repos/domkoder/four-card/statuses/{sha}',
    languages_url: 'https://api.github.com/repos/domkoder/four-card/languages',
    stargazers_url:
      'https://api.github.com/repos/domkoder/four-card/stargazers',
    contributors_url:
      'https://api.github.com/repos/domkoder/four-card/contributors',
    subscribers_url:
      'https://api.github.com/repos/domkoder/four-card/subscribers',
    subscription_url:
      'https://api.github.com/repos/domkoder/four-card/subscription',
    commits_url:
      'https://api.github.com/repos/domkoder/four-card/commits{/sha}',
    git_commits_url:
      'https://api.github.com/repos/domkoder/four-card/git/commits{/sha}',
    comments_url:
      'https://api.github.com/repos/domkoder/four-card/comments{/number}',
    issue_comment_url:
      'https://api.github.com/repos/domkoder/four-card/issues/comments{/number}',
    contents_url:
      'https://api.github.com/repos/domkoder/four-card/contents/{+path}',
    compare_url:
      'https://api.github.com/repos/domkoder/four-card/compare/{base}...{head}',
    merges_url: 'https://api.github.com/repos/domkoder/four-card/merges',
    archive_url:
      'https://api.github.com/repos/domkoder/four-card/{archive_format}{/ref}',
    downloads_url: 'https://api.github.com/repos/domkoder/four-card/downloads',
    issues_url:
      'https://api.github.com/repos/domkoder/four-card/issues{/number}',
    pulls_url: 'https://api.github.com/repos/domkoder/four-card/pulls{/number}',
    milestones_url:
      'https://api.github.com/repos/domkoder/four-card/milestones{/number}',
    notifications_url:
      'https://api.github.com/repos/domkoder/four-card/notifications{?since,all,participating}',
    labels_url: 'https://api.github.com/repos/domkoder/four-card/labels{/name}',
    releases_url:
      'https://api.github.com/repos/domkoder/four-card/releases{/id}',
    deployments_url:
      'https://api.github.com/repos/domkoder/four-card/deployments',
    created_at: '2020-01-08T23:56:10Z',
    updated_at: '2020-03-12T01:48:36Z',
    pushed_at: '2020-03-12T01:48:34Z',
    git_url: 'git://github.com/domkoder/four-card.git',
    ssh_url: 'git@github.com:domkoder/four-card.git',
    clone_url: 'https://github.com/domkoder/four-card.git',
    svn_url: 'https://github.com/domkoder/four-card',
    homepage: null,
    size: 115,
    stargazers_count: 0,
    watchers_count: 0,
    language: 'HTML',
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: true,
    forks_count: 0,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 0,
    license: null,
    allow_forking: true,
    is_template: false,
    topics: [],
    visibility: 'public',
    forks: 0,
    open_issues: 0,
    watchers: 0,
    default_branch: 'master',
  },
];

export const repositoriesSlice = createSlice({
  name: 'repositories',
  initialState,
  reducer: {
    filleterRepositories: (state, action) => {
      return state.filter(repository =>
        repository.name.toLowerCase().startsWith(action.payload.query) ||
        repository.name.toLowerCase().includes(action.payload.query)
          ? repository
          : null
      );
    },
    getRepositories: () => {},
  },
});

export default repositoriesSlice.reducer;
