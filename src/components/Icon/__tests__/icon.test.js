import React from 'react';
import { IconFlatDown } from '../IconFlatDown';
import { IconFlatLeft } from '../IconFlatLeft';
import { IconFlatRight } from '../IconFlatRight';
import { IconFlatUp } from '../IconFlatUp';
import { IconReact } from '../IconReact';
import { Svg } from '../Svg';
import Enzyme from 'enzyme';
import { mountWithIntl } from '../../../utils/enzymeHelper';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

describe('Icons', () => {
  it('Snapshot IconFlatDown', () => {
    const icon = mountWithIntl(<IconFlatDown />);

    expect(icon).toMatchSnapshot();
  });

  it('Snapshot IconFlatLeft', () => {
    const icon = mountWithIntl(<IconFlatLeft />);

    expect(icon).toMatchSnapshot();
  });

  it('Snapshot IconFlatRight', () => {
    const icon = mountWithIntl(<IconFlatRight />);

    expect(icon).toMatchSnapshot();
  });

  it('Snapshot IconFlatUp', () => {
    const icon = mountWithIntl(<IconFlatUp />);

    expect(icon).toMatchSnapshot();
  });

  it('Snapshot IconReact', () => {
    const icon = mountWithIntl(<IconReact />);

    expect(icon).toMatchSnapshot();
  });

  it('Snapshot Svg', () => {
    const icon = mountWithIntl(
      <Svg>
        <IconReact />
      </Svg>,
    );

    expect(icon).toMatchSnapshot();
  });
});
