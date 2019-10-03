import Axios from "./api";
import { LoginRequestModel } from '../component/login/Login';

export const userLogin = async (data: LoginRequestModel, setIsLogin: Function) => {
    try {
        const response = await Axios.post('/login', { ...data });
        setIsLogin(true);
        return response.data;
    } catch (error) {
        setIsLogin(false);
        return error;
    }
}