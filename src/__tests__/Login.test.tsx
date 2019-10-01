import React from 'react';
import Login from '../component/login/Login';
import * as enzyme from 'enzyme';
import {Button} from 'semantic-ui-react';

describe('<Login />', () => {

    let wrapper: enzyme.ShallowWrapper;
    let isLogined:boolean;
    const setisLogined = jest.fn();
    const useStateSpy = jest.spyOn(React, 'useState');
    useStateSpy.mockImplementation(() => [isLogined, setisLogined]);

    beforeEach(() => {
        wrapper = enzyme.shallow(<Login />);
    });

    it('should show login success', () => {
        //const wrapper = enzyme.shallow(<Login />);

        //expect(wrapper.find('Test')).toMatchSnapshot();

        const usernameInput = wrapper.find('input.input1');
        usernameInput.simulate('change', { target: { value: 'admin@123' } });

        const passwordInput = wrapper.find('input.input2');
        passwordInput.simulate('change', { target: { value: 'admin123' } });

        const button =  wrapper.find(Button);
        button.simulate('click');
        
        expect(setisLogined).toHaveBeenCalledWith(true);
    })

    afterEach(() => {
        jest.clearAllMocks();
    });
})

