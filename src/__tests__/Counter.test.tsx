import React from 'react';
import { shallow } from 'enzyme';
import Counter from '../component/counter/Counter';

it('should render Counter count', ()=>{
    const wrapper = shallow(<Counter title="testing" />);
    const countElement = wrapper.find('h4.count');
    const count = countElement.text();
    const buttonElement = wrapper.find('button');
    expect(count).toBe('0');
    buttonElement.simulate('click');
    const count1 = wrapper.find('h4.count').text();
    expect(count1).toBe('1');
    
})