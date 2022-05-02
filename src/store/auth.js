import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  currentUser: {
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
    starred_url: 'https://api.github.com/users/domkoder/starred{/owner}{/repo}',
    subscriptions_url: 'https://api.github.com/users/domkoder/subscriptions',
    organizations_url: 'https://api.github.com/users/domkoder/orgs',
    repos_url: 'https://api.github.com/users/domkoder/repos',
    events_url: 'https://api.github.com/users/domkoder/events{/privacy}',
    received_events_url:
      'https://api.github.com/users/domkoder/received_events',
    type: 'User',
    site_admin: false,
    name: 'Nandom Alfred',
    company: 'TeenMeetCode',
    blog: '',
    location: 'Nigeria Plateau State, Jos',
    email: 'nandommamdam@gmail.com',
    hireable: true,
    bio: 'hoodlum',
    twitter_username: 'domkoder',
    public_repos: 50,
    public_gists: 0,
    followers: 20,
    following: 39,
    created_at: '2016-11-24T14:19:06Z',
    updated_at: '2022-04-28T19:28:17Z',
  },
  isError: '',
  isLoading: '',
  isSuccess: '',
};

export const authSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login: (state, action) => {
      state.value = action.payload;
    },
    getUser: () => {},
  },
});

export default authSlice.reducer;
