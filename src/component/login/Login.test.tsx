import React from 'react';
import Login from './Login';
import * as enzyme from 'enzyme';

it('should render Login', ()=> {
    enzyme.shallow(<Login />);
})

it('should show login success', ()=>{
    const wrapper = enzyme.shallow(<Login />);
    const usernameInput = wrapper.find('input.username');
})