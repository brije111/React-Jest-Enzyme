import Axios, { AxiosResponse } from "axios";
import { LoginRequestModel, LoginResponseModel } from '../component/login/Login';

export const userLogin = async (data: LoginRequestModel) => {
    try {
        const response: AxiosResponse<LoginResponseModel> = await Axios.post('https://simple-login-signup-rest.herokuapp.com/api/user/login', { ...data });
        return response.data;
    } catch (error) {
        return null;
    }
}

export const getUsers = async () => {
    try {
        const response = await Axios.get('https://simple-login-signup-rest.herokuapp.com/api/user');
        return response.data;
    } catch (error) {
        return error;
    }
}