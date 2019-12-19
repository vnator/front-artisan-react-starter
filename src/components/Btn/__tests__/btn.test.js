import React from 'react';
import { Btn } from '../Btn';
import Enzyme, { mount, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { spy } from 'sinon';

Enzyme.configure({ adapter: new Adapter() });

const FEAT = 'Btn';

describe(`${FEAT}`, () => {
  it(`${FEAT} Snapshot`, () => {
    const btn = mount(<Btn onClick={() => console.log('test')}>test</Btn>);

    expect(btn).toMatchSnapshot();
  });

  it(`${FEAT} onClick`, () => {
    const btnSpy = spy();
    const btn = shallow(<Btn onClick={btnSpy}>test</Btn>);

    btn.simulate('click');

    expect(btnSpy.calledOnce).toBeTruthy();
  });
});
