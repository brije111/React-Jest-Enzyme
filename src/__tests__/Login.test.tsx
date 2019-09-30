import React from 'react';
import Login from '../component/login/Login';
import * as enzyme from 'enzyme';

it('should render Login', ()=> {
    enzyme.shallow(<Login />);
})

it('should show login success', ()=>{
    const wrapper = enzyme.shallow(<Login />);

    //expect(wrapper.find('Test')).toMatchSnapshot();

    const usernameInput = wrapper.find('input.input1');
    usernameInput.simulate('change', { target: { value: 'admin@123' } });

    const passwordInput = wrapper.find('input.input2');
    passwordInput.simulate('change', { target: { value: 'admin123' } });

    wrapper.find('button').simulate('click');

    expect(wrapper.state('isLogined')).toBe(true);
})