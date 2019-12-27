import { IntlProvider, createIntl } from 'react-intl';
import { mount, shallow } from 'enzyme';
import { flattenMessages } from '../config/flattenMessages';
import { messages } from '../messages';

// You can pass your messages to the IntlProvider. Optional: remove if unneeded.

const defaultLocale = 'pt-BR';
const locale = defaultLocale;
const wrapMessages = flattenMessages(messages[locale]);

function mountWithIntl(node) {
  return mount(node, {
    wrappingComponent: IntlProvider,
    wrappingComponentProps: {
      locale,
      defaultLocale,
      messages: wrapMessages,
    },
  });
}

function shallowWithIntl(node) {
  return shallow(node, {
    wrappingComponent: IntlProvider,
    wrappingComponentProps: {
      locale,
      defaultLocale,
      messages: wrapMessages,
    },
  });
}

const intl = createIntl({
  locale: 'pt-BR',
  defaultLocale: 'pt-BR',
  messages: wrapMessages,
});

export { mountWithIntl, shallowWithIntl, intl };
