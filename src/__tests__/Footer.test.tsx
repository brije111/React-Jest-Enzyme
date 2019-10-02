import React from 'react';
import { shallow } from 'enzyme';
import Footer from '../component/Footer';

it('should render customer service phone number', () => {
    const wrapper = shallow(<Footer />);
    const span = wrapper.find('span');
    const result = span.text();

    expect(result).toBe('Customer Support: 1800 180 2222');
})