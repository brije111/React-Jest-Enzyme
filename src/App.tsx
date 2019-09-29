import React from 'react';
import Counter from './component/Counter';
import Footer from './component/Footer';
import Login from './component/login/Login';

const App = () => {
    return <div>
        <Counter title='My Counter App' />
        <Footer />
        <Login />
    </div>
}

export default App;