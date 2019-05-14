import React from 'react';
import { shallow } from 'enzyme';
import ColorPicker from '../components/ColorPicker';

describe('ColorPicker component', () => {
  it('pickes a Color', () => {
    const wrapper = shallow(<ColorPicker />);
    expect(wrapper).toMatchSnapshot();
  });
});
