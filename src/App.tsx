import React from 'react';
import Counter from './component/counter/Counter';
import Footer from './component/counter/Footer';

const App = () => {
    return <div>
        <Counter title='My Counter App' />
        <Footer />
    </div>
}

export default App;