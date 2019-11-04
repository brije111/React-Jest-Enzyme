import React from 'react';
import Login from '../component/login/Login';
import * as enzyme from 'enzyme';
import { Button } from 'semantic-ui-react';
import mockedAxios from 'axios';
//import MockAdapter from 'axios-mock-adapter';
import { userLogin } from '../apis';


describe('<Login />', () => {

    let wrapper: enzyme.ShallowWrapper;

    beforeEach(() => {
        wrapper = enzyme.shallow(<Login />);
    });

    it('should call a userLogin function', async () => {
        const data = {
            email: 'eve.holt@reqres.in',
            password: 'cityslicka'
        }
        const stateCallback = jest.fn();
        //var mock = new MockAdapter(axios);
        const responseData = { token: '' };
        mockedAxios.get.mockImplementationOnce(()={})
        //mockedAxios.post.mockResolvedValue(responseData);
        //const consoleLogSpy = jest.spyOn(console, 'log');
        userLogin(data, stateCallback).then(response => {
            expect(response).toEqual(responseData);
        });
        //expect(wrapper.find('success')).not.toBeNull();
        //done();
    });

    it('should show login success', () => {
        //const wrapper = enzyme.shallow(<Login />);

        //expect(wrapper.find('Test')).toMatchSnapshot();

        //jest.spyOn(user, '')

        const usernameInput = wrapper.find('input.input1');
        usernameInput.simulate('change', { target: { value: 'eve.holt@reqre.in' } });

        const passwordInput = wrapper.find('input.input2');
        passwordInput.simulate('change', { target: { value: 'cityslicka' } });

        // const button = wrapper.find(Button);
        // button.simulate('click');

        // const form = wrapper.find('success');

        // expect(form).not.toBeNull();
    })

    afterEach(() => {
        jest.clearAllMocks();
    });
})

