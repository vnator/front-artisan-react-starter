import { parse } from 'intl-messageformat-parser';

function parseMessages(nestedMessages = {}, prefix = '') {
  return nestedMessages
    ? Object.keys(nestedMessages).reduce((messages, key) => {
        const value = nestedMessages[key];
        const prefixedKey = prefix ? `${prefix}.${key}` : key;

        if (typeof value === 'string') {
          return {
            ...messages,
            [prefixedKey]: parse(value),
          };
        }

        return Object.assign(messages, parseMessages(value, prefixedKey));
      }, {})
    : {};
}

export { parseMessages };
