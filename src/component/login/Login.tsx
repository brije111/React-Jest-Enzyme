import React, { useState } from 'react';
import { Button, Form, Message } from 'semantic-ui-react';
import { userLogin } from '../../apis';

export interface LoginRequestModel {
    email: string;
    password: string;
}

export interface LoginResponseModel {
    message: string;
    data: object
}

const Login = () => {
    const [username, setusername] = useState('');
    const [password, setpassword] = useState('');
    const [isLogined, setisLogined] = useState(false);
    const [response, setResponse] = useState<string | undefined>();

    const submitClick = () => {
        //if ((username == "eve.holt@reqres.in") && (password == "cityslicka")) {
        const data = {
            email: username,
            password: password
        }
        let user = userLogin(data).then(response => {
            if (response)
                setResponse(response.message);
            else setResponse('error');
        });
        console.log(user);
        //}
    }

    return (
        <Form className={isLogined ? 'success' : 'error'}>
            <Form.Field>
                <label>Username</label>
                <input className="input1" type="text" name="username" onChange={(e) => {
                    setusername(e.target.value);
                }} value={username} />
            </Form.Field>
            <Form.Field>
                <label>Password</label>
                <input className='input2' type="password" name="password" onChange={(e) => {
                    setpassword(e.target.value);
                }} value={password} />
            </Form.Field>
            <Message
                className={isLogined ? 'success' : 'error'}
                header='Login Completed'
                content="You're logedin successfully"
            />
            <Button primary name="submit" onClick={submitClick}> Submit</Button>
            <h1>{response}</h1>
        </Form>
    );
}

export default Login;
