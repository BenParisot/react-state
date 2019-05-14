import React from 'react';
import { shallow } from 'enzyme';
import ColorPicker from '../components/ColorPicker';

describe('ColorPicker component', () => {
  it('pickes a Dog', () => {
    const wrapper = shallow(<ColorPicker />);
    expect(wrapper).toMatchSnapshot();
  });
});
