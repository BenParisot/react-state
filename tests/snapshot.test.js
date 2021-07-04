import React from 'react';
import { shallow } from 'enzyme';
import ColorPicker from '../components/ColorPicker';

describe('ColorPicker component', () => {
  it('lifts and picks a color', () => {
    const wrapper = shallow(<ColorPicker />);
    expect(wrapper).toMatchSnapshot();
  });
});