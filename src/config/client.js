import { Client, dedupExchange, fetchExchange } from 'urql';
import { cacheExchange } from '@urql/exchange-graphcache';

const cache = cacheExchange({});

const client = new Client({
  url: 'https://localhost:4000/',
  fetchOptions: {
    credentials: 'same-origin',
    mode: 'no-cors',
  },
});

export { client };
