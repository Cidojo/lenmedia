import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Header } from './parts/header';
import { Navigation } from './parts/navigation';

const App = () => {
    return (
        <Router>
            <div>
                <Header/>
            </div>
            <Navigation />
        </Router>
    );
};

export default App;
