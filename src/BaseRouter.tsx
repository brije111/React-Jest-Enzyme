import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import App from './App';
import BaseComponent from './component/BaseComponent';
import Login from './component/login/Login';
import { Container } from 'semantic-ui-react';

const BaseRouter = () => {
    return <Container>
        <Router>
            <Switch>
                <Route path='/counter' component={App} />
                <Route path='/login' component={Login} />
                <Route path='/' component={BaseComponent} />
            </Switch>
        </Router>
    </Container>

}
export default BaseRouter;