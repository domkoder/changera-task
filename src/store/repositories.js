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
  // {
  //   id: 232930173,
  //   node_id: 'MDEwOlJlcG9zaXRvcnkyMzI5MzAxNzM=',
  //   name: 'acme',
  //   full_name: 'domkoder/acme',
  //   private: false,
  //   owner: {
  //     login: 'domkoder',
  //     id: 23723199,
  //     node_id: 'MDQ6VXNlcjIzNzIzMTk5',
  //     avatar_url: 'https://avatars.githubusercontent.com/u/23723199?v=4',
  //     gravatar_id: '',
  //     url: 'https://api.github.com/users/domkoder',
  //     html_url: 'https://github.com/domkoder',
  //     followers_url: 'https://api.github.com/users/domkoder/followers',
  //     following_url:
  //       'https://api.github.com/users/domkoder/following{/other_user}',
  //     gists_url: 'https://api.github.com/users/domkoder/gists{/gist_id}',
  //     starred_url:
  //       'https://api.github.com/users/domkoder/starred{/owner}{/repo}',
  //     subscriptions_url: 'https://api.github.com/users/domkoder/subscriptions',
  //     organizations_url: 'https://api.github.com/users/domkoder/orgs',
  //     repos_url: 'https://api.github.com/users/domkoder/repos',
  //     events_url: 'https://api.github.com/users/domkoder/events{/privacy}',
  //     received_events_url:
  //       'https://api.github.com/users/domkoder/received_events',
  //     type: 'User',
  //     site_admin: false,
  //   },
  //   html_url: 'https://github.com/domkoder/acme',
  //   description: null,
  //   fork: false,
  //   url: 'https://api.github.com/repos/domkoder/acme',
  //   forks_url: 'https://api.github.com/repos/domkoder/acme/forks',
  //   keys_url: 'https://api.github.com/repos/domkoder/acme/keys{/key_id}',
  //   collaborators_url:
  //     'https://api.github.com/repos/domkoder/acme/collaborators{/collaborator}',
  //   teams_url: 'https://api.github.com/repos/domkoder/acme/teams',
  //   hooks_url: 'https://api.github.com/repos/domkoder/acme/hooks',
  //   issue_events_url:
  //     'https://api.github.com/repos/domkoder/acme/issues/events{/number}',
  //   events_url: 'https://api.github.com/repos/domkoder/acme/events',
  //   assignees_url:
  //     'https://api.github.com/repos/domkoder/acme/assignees{/user}',
  //   branches_url:
  //     'https://api.github.com/repos/domkoder/acme/branches{/branch}',
  //   tags_url: 'https://api.github.com/repos/domkoder/acme/tags',
  //   blobs_url: 'https://api.github.com/repos/domkoder/acme/git/blobs{/sha}',
  //   git_tags_url: 'https://api.github.com/repos/domkoder/acme/git/tags{/sha}',
  //   git_refs_url: 'https://api.github.com/repos/domkoder/acme/git/refs{/sha}',
  //   trees_url: 'https://api.github.com/repos/domkoder/acme/git/trees{/sha}',
  //   statuses_url: 'https://api.github.com/repos/domkoder/acme/statuses/{sha}',
  //   languages_url: 'https://api.github.com/repos/domkoder/acme/languages',
  //   stargazers_url: 'https://api.github.com/repos/domkoder/acme/stargazers',
  //   contributors_url: 'https://api.github.com/repos/domkoder/acme/contributors',
  //   subscribers_url: 'https://api.github.com/repos/domkoder/acme/subscribers',
  //   subscription_url: 'https://api.github.com/repos/domkoder/acme/subscription',
  //   commits_url: 'https://api.github.com/repos/domkoder/acme/commits{/sha}',
  //   git_commits_url:
  //     'https://api.github.com/repos/domkoder/acme/git/commits{/sha}',
  //   comments_url:
  //     'https://api.github.com/repos/domkoder/acme/comments{/number}',
  //   issue_comment_url:
  //     'https://api.github.com/repos/domkoder/acme/issues/comments{/number}',
  //   contents_url: 'https://api.github.com/repos/domkoder/acme/contents/{+path}',
  //   compare_url:
  //     'https://api.github.com/repos/domkoder/acme/compare/{base}...{head}',
  //   merges_url: 'https://api.github.com/repos/domkoder/acme/merges',
  //   archive_url:
  //     'https://api.github.com/repos/domkoder/acme/{archive_format}{/ref}',
  //   downloads_url: 'https://api.github.com/repos/domkoder/acme/downloads',
  //   issues_url: 'https://api.github.com/repos/domkoder/acme/issues{/number}',
  //   pulls_url: 'https://api.github.com/repos/domkoder/acme/pulls{/number}',
  //   milestones_url:
  //     'https://api.github.com/repos/domkoder/acme/milestones{/number}',
  //   notifications_url:
  //     'https://api.github.com/repos/domkoder/acme/notifications{?since,all,participating}',
  //   labels_url: 'https://api.github.com/repos/domkoder/acme/labels{/name}',
  //   releases_url: 'https://api.github.com/repos/domkoder/acme/releases{/id}',
  //   deployments_url: 'https://api.github.com/repos/domkoder/acme/deployments',
  //   created_at: '2020-01-10T00:04:26Z',
  //   updated_at: '2020-01-10T00:10:05Z',
  //   pushed_at: '2020-01-10T00:10:02Z',
  //   git_url: 'git://github.com/domkoder/acme.git',
  //   ssh_url: 'git@github.com:domkoder/acme.git',
  //   clone_url: 'https://github.com/domkoder/acme.git',
  //   svn_url: 'https://github.com/domkoder/acme',
  //   homepage: null,
  //   size: 162,
  //   stargazers_count: 0,
  //   watchers_count: 0,
  //   language: 'HTML',
  //   has_issues: true,
  //   has_projects: true,
  //   has_downloads: true,
  //   has_wiki: true,
  //   has_pages: false,
  //   forks_count: 0,
  //   mirror_url: null,
  //   archived: false,
  //   disabled: false,
  //   open_issues_count: 0,
  //   license: null,
  //   allow_forking: true,
  //   is_template: false,
  //   topics: [],
  //   visibility: 'public',
  //   forks: 0,
  //   open_issues: 0,
  //   watchers: 0,
  //   default_branch: 'master',
  // },
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
