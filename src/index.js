import React from 'react';
import ReactDOM from 'react-dom';

import { IntlProvider } from 'react-intl';
import '@formatjs/intl-relativetimeformat/polyfill';
import '@formatjs/intl-relativetimeformat/dist/locale-data/pt';
import '@formatjs/intl-relativetimeformat/dist/locale-data/en';

import { messages } from './messages';

import { flattenMessages } from './config/flattenMessages';
import * as serviceWorker from './config/serviceWorker';
import { App } from './App/App';

import './index.css';

const locale =
  navigator.language ||
  navigator.userLanguage ||
  (navigator.languages && navigator.languages[0]) ||
  'pt-BR';

ReactDOM.render(
  <IntlProvider locale={locale} messages={flattenMessages(messages[locale])}>
    <App />
  </IntlProvider>,
  document.getElementById('root'),
);

serviceWorker.unregister();
