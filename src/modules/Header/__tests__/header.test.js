import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Header } from '../Header';
import { mountWithIntl } from '../../../utils/enzymeHelper';

Enzyme.configure({ adapter: new Adapter() });

describe('Header', () => {
  it('Snapshot', () => {
    const header = mountWithIntl(<Header />);

    expect(header).toMatchSnapshot();
  });
});
