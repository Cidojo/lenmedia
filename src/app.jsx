import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Header } from './components/header';
import { Promo } from './components/promo';
import { promoTitle, promoContent } from './mock-data';

const App = () => {
	return (
		<Router>
			<Header/>
			<Promo title={promoTitle} content={promoContent} />
		</Router>
	);
};

export default App;
