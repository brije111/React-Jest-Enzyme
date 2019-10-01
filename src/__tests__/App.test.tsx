import React from 'react';
import { shallow } from 'enzyme';
import App from '../App';
import Footer from '../component/Footer';
//import Counter from '../component/counter/Counter';

it('should render App with child Counter and Footer', ()=>{
    const wrapper = shallow(<App />);
    const counter = wrapper.find(Footer);

    expect(counter.exists()).toBe(true);
})