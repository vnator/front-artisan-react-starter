import React from 'react';
import ReactDOM from 'react-dom';
import { Provider as ReduxProvider } from 'react-redux';
import { ApolloProvider as GraphQlProvider } from '@apollo/react-hooks';

import { RawIntlProvider, createIntl } from 'react-intl';
import { messages } from './messages';

import { parseMessages } from './config/parseMessages';
import * as serviceWorker from './config/serviceWorker';
import { App } from './modules/App/App.jsx';

import { store } from './config/store';
import { client } from './config/client';
import { LANG } from './const/lang';

import './index.css';

if (!Intl.PluralRules) {
  require('@formatjs/intl-pluralrules/polyfill');
  require('@formatjs/intl-pluralrules/dist/locale-data/pt');
  require('@formatjs/intl-pluralrules/dist/locale-data/en');
}

if (!Intl.RelativeTimeFormat) {
  require('@formatjs/intl-relativetimeformat/polyfill');
  require('@formatjs/intl-relativetimeformat/dist/locale-data/pt');
  require('@formatjs/intl-relativetimeformat/dist/locale-data/en');
}

if (!Intl.DisplayNames) {
  require('@formatjs/intl-displaynames/polyfill');
  require('@formatjs/intl-displaynames/dist/locale-data/pt'); // Add locale data for de
  require('@formatjs/intl-displaynames/dist/locale-data/en'); // Add locale data for de
}

const browserLocale =
  navigator.language ||
  navigator.userLanguage ||
  (navigator.languages && navigator.languages[0]);

const locale = Object.values(LANG).includes(browserLocale)
  ? browserLocale
  : LANG.EN;

const intl = createIntl({
  locale,
  messages: parseMessages(messages[locale]),
});

ReactDOM.render(
  <GraphQlProvider client={client}>
    <ReduxProvider store={store}>
      <RawIntlProvider value={intl}>
        <App />
      </RawIntlProvider>
    </ReduxProvider>
  </GraphQlProvider>,
  document.getElementById('root'),
);

serviceWorker.unregister();
