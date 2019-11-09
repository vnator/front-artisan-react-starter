function flattenMessages(nestedMessages, prefix = '') {
  return Object.keys(nestedMessages).reduce((messages, key) => {
    const value = nestedMessages[key];
    const prefixedKey = prefix ? `${prefix}.${key}` : key;

    if (typeof value === 'string') {
      return {
        ...messages,
        [prefixedKey]: value,
      };
    }

    return Object.assign(messages, flattenMessages(value, prefixedKey));
  }, {});
}

export { flattenMessages };
