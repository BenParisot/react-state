import React from 'react';
import { shallow } from 'enzyme';
import RandomColor from '../components/RandomColor';

describe('RandomColor component', () => {
  it('randomly generates a Color', () => {
    const wrapper = shallow(<RandomColor />);
    expect(wrapper).toMatchSnapshot();
  });
});
