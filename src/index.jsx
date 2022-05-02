import { ColorModeScript } from '@chakra-ui/react';
import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import store from './store/ConfigureStore';
import { Provider } from 'react-redux';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <StrictMode>
    <ColorModeScript />
    <Provider store={store()}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </StrictMode>
);

// d8edac70128b15db86b7810104e8a35795551271
// https://api.github.com/users/domkoder/repos?per_page=2

// https://github.com/login/oauth/access_token?code=e2fccea09d16187e37bf&client_id=323201eedf1cc3f305d8&client_secret=d8edac70128b15db86b7810104e8a35795551271
// access_token=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&scope=&token_type=bearer

// &client_id=323201eedf1cc3f305d8&client_secret=d8edac70128b15db86b7810104e8a35795551271&code=9777efcb7b753458e369
