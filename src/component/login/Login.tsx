import React, { useState } from 'react';
import { Button, Form } from 'semantic-ui-react';

const Login = () => {
    const [username, setusername] = useState('');
    const [password, setpassword] = useState('');
    const [isLogined, setisLogined] = useState(false);

    const submitClick = () => {
        if ((username == "admin@123") && (password == "admin123")) {
            setisLogined(true);
        }
    }

    return (
        <Form className={isLogined?'success':'error'}>
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
            <Button primary name="submit" onClick={submitClick}> Submit</Button>
        </Form>
    );
}

export default Login;
