import React from 'react';
import Enzyme, { mount, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { spy } from 'sinon';

import { Address } from '../Address';
import { _initialState } from '../redux/reducer';
import { el } from '../element.selectors';
import { intl } from '../../../utils/enzymeHelper';

Enzyme.configure({ adapter: new Adapter() });

describe('Address', () => {
  const mockProps = {
    address: _initialState,
    setStreet: spy(),
    setAddressCity: spy(),
    intl,
  };

  beforeEach(() => {
    mockProps.setAddressCity.resetHistory();
    mockProps.setStreet.resetHistory();
  });

  it('Snapshot', () => {
    const address = mount(<Address {...mockProps} />);

    expect(address).toMatchSnapshot();
  });

  it('onClick select address', () => {
    const address = shallow(<Address {...mockProps} />);
    const button = address.find(`.${el.btnSelectStreet}`).first();

    button.simulate('click');
    expect(address.state().selected).toBe(button.props().children);
  });

  it('onChange newStreet', () => {
    const newAddress = 'carambolas';
    const address = shallow(<Address {...mockProps} />);
    const input = address.find(`.${el.inputUpdateStreet}`);

    input.simulate('change', { target: { value: newAddress } });
    expect(address.state().newAddress).toBe(newAddress);
  });

  it('onClick updateStreet', () => {
    const address = shallow(<Address {...mockProps} />);
    const button = address.find(`.${el.btnUpdateStreet}`);

    button.simulate('click');
    expect(mockProps.setStreet.calledOnce).toBeTruthy();
  });

  it('onChange newCity', () => {
    const newCity = 'Marcelandia';
    const address = shallow(<Address {...mockProps} />);
    const input = address.find(`.${el.inputUpdateCity}`);

    input.simulate('change', { target: { value: newCity } });
    expect(address.state().newCity).toBe(newCity);
  });

  it('onClick setAddressCity', () => {
    const address = shallow(<Address {...mockProps} />);
    const button = address.find(`.${el.btnUpdateCity}`);

    button.simulate('click');
    expect(mockProps.setAddressCity.calledOnce).toBeTruthy();
  });
});
