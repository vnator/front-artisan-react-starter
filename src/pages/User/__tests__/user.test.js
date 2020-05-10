import React from 'react';
import Enzyme, { mount, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { spy } from 'sinon';

import { User } from '../User';
import { intl } from '../../../utils/enzymeHelper';

Enzyme.configure({ adapter: new Adapter() });

describe('User', () => {
  let mockProps = {
    intl,
    mutate: spy(),
    triggerToast: spy(),
    data: {
      loading: false,
      user: {},
      refetch: spy(),
      error: '',
    },
  };

  beforeEach(() => {
    mockProps.mutate.resetHistory();
    mockProps.triggerToast.resetHistory();
    mockProps.data.refetch.resetHistory();
  });

  it('Snapshot', () => {
    const user = mount(<User {...mockProps} />);

    expect(user).toMatchSnapshot();
  });

  it('onChange method', () => {
    const user = shallow(<User {...mockProps} />);
    const value = 'on change method value';
    const states = Object.keys(user.state());

    const instance = user.instance();

    states.forEach((name) => {
      instance.onChange({ target: { value, name } });
      expect(user.state()[name]).toBe(value);
    });
  });

  it('_updateUser method', () => {
    const defaultResult = {
      name: '',
      email: '',
      dateOfBirth: '',
      gender: 'MALE',
    };

    let newMockProps = {
      ...mockProps,
    };

    delete newMockProps.data.user;

    const data = {
      ...newMockProps.data,
      user: {
        name: 'any name',
        email: 'any@email',
        dateOfBirth: '2012-02-02',
        gender: 'FEMALE',
      },
    };

    const userWithoutDataUser = shallow(<User {...newMockProps} />);
    const userWithDataUser = shallow(<User {...newMockProps} {...data} />);

    const instanceWithoutDataUse = userWithoutDataUser.instance();
    const instanceWithDataUse = userWithDataUser.instance();

    expect(instanceWithoutDataUse._updateUser(newMockProps.data.user)).toEqual(
      defaultResult,
    );

    expect(instanceWithDataUse._updateUser(data.user)).toEqual(data.user);
  });

  it('defineType method', () => {
    const instance = shallow(<User {...mockProps} />).instance();

    expect(instance.defineType('dateOfBirth')).toBe('date');
    expect(instance.defineType('email')).toBe('email');
  });

  it('submit method when triggerToast', () => {
    const instance = shallow(<User {...mockProps} />).instance();
    instance.submit(
      { preventDefault: spy() },
      {
        name: '',
        email: '',
        dateOfBirth: '',
        gender: '',
      },
    );

    expect(mockProps.triggerToast.calledOnce).toBeTruthy();
  });

  it('submit method when mutate', () => {
    const instance = shallow(<User {...mockProps} />).instance();
    instance.submit(
      { preventDefault: spy() },
      {
        name: 'any name',
        email: 'any@email.com',
        dateOfBirth: '2012-02-02',
        gender: 'FEMALE',
      },
    );

    expect(mockProps.mutate.calledOnce).toBeTruthy();
  });

  it('submit method', () => {
    const user = mount(<User {...mockProps} />);
    user.find('Btn').simulate('click');

    expect(mockProps.triggerToast.calledOnce).toBeTruthy();
  });
});
