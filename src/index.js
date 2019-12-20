import React from 'react';
import ReactDOM from 'react-dom';
import { Provider as ReduxProvider } from 'react-redux';
import { ApolloProvider as GraphQlProvider } from '@apollo/react-hooks';

import { IntlProvider } from 'react-intl';
import { messages } from './messages';

import { flattenMessages } from './config/flattenMessages';
import * as serviceWorker from './config/serviceWorker';
import { App } from './modules/App/App.jsx';

import { store } from './config/store';
import { client } from './config/client';

import './index.css';

if (!Intl.RelativeTimeFormat) {
  require('@formatjs/intl-relativetimeformat/polyfill');
  require('@formatjs/intl-relativetimeformat/dist/locale-data/pt');
  require('@formatjs/intl-relativetimeformat/dist/locale-data/en');
}

if (!Intl.PluralRules) {
  require('@formatjs/intl-pluralrules/polyfill');
  require('@formatjs/intl-pluralrules/dist/locale-data/pt');
  require('@formatjs/intl-pluralrules/dist/locale-data/en');
}

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
