import React from 'react';
import Login from './Login';
import * as enzyme from 'enzyme';

it('should render Login', ()=> {
    enzyme.shallow(<Login />);
})