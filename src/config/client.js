import { createClient, dedupExchange, fetchExchange } from 'urql';
import { cacheExchange } from '@urql/exchange-graphcache';

const cache = cacheExchange({});

const client = new createClient({
  url: 'http://localhost:4000/',
  exchanges: [dedupExchange, cache, fetchExchange],
  fetchOptions: {
    mode: 'no-cors',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  },
});

export { client };
