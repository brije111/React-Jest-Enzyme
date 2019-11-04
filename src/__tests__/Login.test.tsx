import React from 'react';
import Login from '../component/login/Login';
import * as enzyme from 'enzyme';
import { Button } from 'semantic-ui-react';
//jest.unmock('axios');
import axios from 'axios';
//import MockAdapter from 'axios-mock-adapter';
import { userLogin, getUsers } from '../apis';

// wrap the module in jest.mock() 
jest.mock('axios');
// This sets the mock adapter on the default instance
//var mock = new MockAdapter(axios);
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('<Login />', () => {

    let wrapper: enzyme.ShallowWrapper;

    beforeEach(() => {
        wrapper = enzyme.shallow(<Login />);
    });

    it('should call a userLogin function', async () => {
        const data = {
            email: 'brij@hcl.com',
            password: '123456'
        }
        const responseData = { data: { token: '' } };
        //mock.onPost('https://reqres.in/api/login').reply(200,responseData);
        mockedAxios.get.mockImplementationOnce(() => Promise.resolve(responseData))
        //mockedAxios.get.mockImplementationOnce(()={})
        //mockedAxios.post.mockResolvedValue(responseData);
        //const consoleLogSpy = jest.spyOn(console, 'log');
        const stateCallback = jest.fn();
        //const response = await axios.post('https://simple-login-signup-rest.herokuapp.com/api/user/login', data);
        const response = await getUsers();
        expect(response).toEqual(responseData.data);
        expect(mockedAxios.get).toHaveBeenCalledTimes(1);
        expect(mockedAxios.get).toHaveBeenCalledWith('https://simple-login-signup-rest.herokuapp.com/api/user');
        //expect(wrapper.find('success')).not.toBeNull();
        //done();
    });

    it('should show login success', () => {
        //const wrapper = enzyme.shallow(<Login />);

        //expect(wrapper.find('Test')).toMatchSnapshot();

        //jest.spyOn(user, '')

        const usernameInput = wrapper.find('input.input1');
        usernameInput.simulate('change', { target: { value: 'brij@hcl.com' } });

        const passwordInput = wrapper.find('input.input2');
        passwordInput.simulate('change', { target: { value: '123456' } });

        const data = {
            email: 'brij@hcl.com',
            password: '123456'
        }
        const responseData = { data: { token: '' } };
        //mock.onPost('https://reqres.in/api/login').reply(200,responseData);
        mockedAxios.post.mockImplementationOnce(() => Promise.resolve(responseData))

        const button = wrapper.find(Button);
        button.simulate('click');

        const h1 = wrapper.find('h1');
        expect(h1.text()).toEqual('success');

    })

    afterEach(() => {
        jest.clearAllMocks();
    });
})

