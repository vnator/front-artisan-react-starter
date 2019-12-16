import React from 'react';
import ReactDOM from 'react-dom';
import { Provider as ReduxProvider } from 'react-redux';
import { ApolloProvider as GraphQlProvider } from '@apollo/react-hooks';

import { IntlProvider } from 'react-intl';
import '@formatjs/intl-relativetimeformat/polyfill';
import '@formatjs/intl-relativetimeformat/dist/locale-data/pt';
import '@formatjs/intl-relativetimeformat/dist/locale-data/en';

import { messages } from './messages';

import { flattenMessages } from './config/flattenMessages';
import * as serviceWorker from './config/serviceWorker';
import { App } from './modules/App/App.jsx';

import { store } from './config/store';
import { client } from './config/client';

import './index.css';

const locale =
  navigator.language ||
  navigator.userLanguage ||
  (navigator.languages && navigator.languages[0]) ||
  'pt-BR';

ReactDOM.render(
  <GraphQlProvider client={client}>
    <ReduxProvider store={store}>
      <IntlProvider
        locale={locale}
        messages={flattenMessages(messages[locale])}>
        <App />
      </IntlProvider>
    </ReduxProvider>
  </GraphQlProvider>,
  document.getElementById('root'),
);

serviceWorker.unregister();
