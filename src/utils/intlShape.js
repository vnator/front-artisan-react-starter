import Type from 'prop-types';

const intlConfig = {
  locale: Type.string,
  timeZone: Type.string,
  messages: Type.objectOf(Type.string),
  defaultLocale: Type.string,
};

const intlFormatters = {
  formatDate: Type.func,
  formatTime: Type.func,
  formatRelativeTime: Type.func,
  formatNumber: Type.func,
  formatPlural: Type.func,
  formatMessage: Type.func,
  formatHTMLMessage: Type.func,
};

const intlShape = {
  ...intlConfig,
  ...intlFormatters,
};

export { intlShape, intlConfig, intlFormatters };
