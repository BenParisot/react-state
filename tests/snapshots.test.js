import React from 'react';
import { shallow } from 'enzyme';
import Counter from '../components/Counter';

describe('Counter component', () => {
  it('counts', () => {
    const wrapper = shallow(<Counter />);
    expect(wrapper).toMatchSnapshot();
  });
});
