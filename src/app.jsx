import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Header } from './components/header';
import { Promo } from './components/promo';
import { Reviews } from './components/reviews';
import { promoTitle, promoContent, reviewsData } from './mock-data';

const App = () => {
	return (
		<Router>
			<Header/>
			<Promo title={promoTitle} content={promoContent} />
			<Reviews reviews={reviewsData} />
		</Router>
	);
};

export default App;
