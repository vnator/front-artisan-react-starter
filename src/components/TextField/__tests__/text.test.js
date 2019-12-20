import React from 'react';
import { TextField } from '../TextField';
import Enzyme, { mount, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { spy } from 'sinon';

Enzyme.configure({ adapter: new Adapter() });

describe('TextField', () => {
  const mockProps = {
    name: 'test',
    label: 'test',
    placeholder: 'unit test',
    value: 'any value =D',
    onChange: spy(),
    onBlur: spy(),
    onFocus: spy(),
    type: 'text',
  };

  beforeEach(() => {
    mockProps.onChange.resetHistory();
    mockProps.onBlur.resetHistory();
    mockProps.onFocus.resetHistory();
  });

  it('Snapshot', () => {
    const textField = mount(<TextField {...mockProps} />);

    expect(textField).toMatchSnapshot();
  });

  it('props name', () => {
    const textField = shallow(<TextField {...mockProps} />);

    const dom = textField.exists(`input[name="${mockProps.name}"]`);

    expect(dom).toBeTruthy();
  });

  it('props label', () => {
    const textField = shallow(<TextField {...mockProps} />);

    const dom = textField.find('label').prop('children');

    expect(dom).toBe(mockProps.label);
  });

  it('props placeholder', () => {
    const textField = shallow(<TextField {...mockProps} />);

    const dom = textField.exists(
      `input[placeholder="${mockProps.placeholder}"]`,
    );

    expect(dom).toBeTruthy();
  });

  it('props value', () => {
    const textField = shallow(<TextField {...mockProps} />);

    const dom = textField.exists(`input[value="${mockProps.value}"]`);

    expect(dom).toBeTruthy();
  });

  it('onChange', () => {
    const textField = shallow(<TextField {...mockProps} />);

    textField
      .find('input')
      .simulate('change', { target: { value: 'carambolas' } });

    expect(mockProps.onChange.called).toBeTruthy();
  });

  it('onBlur', () => {
    const textField = shallow(<TextField {...mockProps} />);

    textField.find('input').simulate('blur');

    expect(mockProps.onBlur.called).toBeTruthy();
  });

  it('onFocus', () => {
    const textField = shallow(<TextField {...mockProps} />);

    textField.find('input').simulate('focus');

    expect(mockProps.onFocus.called).toBeTruthy();
  });

  it('input type', () => {
    const textField = shallow(<TextField {...mockProps} />);

    const dom = textField.exists(`input[type="${mockProps.type}"]`);

    expect(dom).toBeTruthy();
  });

  it('disabled', () => {
    const textField = shallow(<TextField {...mockProps} disabled />);

    const dom = textField.exists(`input[disabled]`);

    expect(dom).toBeTruthy();
  });
});
