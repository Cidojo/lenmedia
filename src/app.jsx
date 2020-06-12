import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Header } from './components/header';
import { Promo } from './components/promo';
import { Reviews } from './components/reviews';
import { Footer } from './components/footer';
import { Schedule } from './components/schedule';
import { promoTitle, promoContent, reviewsData, scheduleData } from './mock-data';

const App = () => {
	return (
		<Router>
			<Header/>
			<Promo title={promoTitle} content={promoContent} />
			<Reviews reviews={reviewsData} />
			<Schedule bodyData={scheduleData} />
			<Footer />
		</Router>
	);
};

export default App;
