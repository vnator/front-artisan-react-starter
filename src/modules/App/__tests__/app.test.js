import React from 'react';
import { Provider } from 'react-redux';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { App } from '../App';
import { mountWithIntl } from '../../../utils/enzymeHelper';

Enzyme.configure({ adapter: new Adapter() });
const mockStore = configureMockStore([thunk]);

describe('App', () => {
  it('Snapshot', () => {
    const store = mockStore({
      toast: { active: false, message: '' },
    });

    const app = mountWithIntl(
      <Provider store={store}>
        <App />
      </Provider>,
    );

    expect(app).toMatchSnapshot();
  });
});
