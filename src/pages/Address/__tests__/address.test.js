import React from 'react';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { spy } from 'sinon';

import { Address } from '../Address';
import { _initialState } from '../redux/reducer';
import { el } from '../element.selectors';

Enzyme.configure({ adapter: new Adapter() });

const mockStore = configureMockStore([thunk]);

describe('Address', () => {
  it('Snapshot', () => {
    const store = mockStore({
      address: _initialState,
    });

    const address = mount(
      <Provider store={store}>
        <Address />
      </Provider>,
    );

    expect(address).toMatchSnapshot();
  });

  it('onClick select address', () => {
    const store = mockStore({
      address: _initialState,
    });

    const address = mount(
      <Provider store={store}>
        <Address />
      </Provider>,
    );

    const button = address
      .find('Address')
      .find(`.${el.btnSelectRow}`)
      .first();

    button.simulate('click');

    const result = address.find('Address').find(`.${el.selectedRow}`);
    expect(button.props().children).toBe(result.props().children);
  });

  it('onChange street', () => {
    expect(false).toBeTruthy();
  });

  it('onClick update street', () => {
    expect(false).toBeTruthy();
  });

  it('onChange cities', () => {
    expect(false).toBeTruthy();
  });

  it('onClick cities', () => {
    expect(false).toBeTruthy();
  });
});
