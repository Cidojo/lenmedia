import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';
import React from 'react';
import ReactDOM from 'react-dom';

import './styles/styles.scss';

import App from './app';

ReactDOM.render(
	// eslint-disable-next-line react/jsx-filename-extension
	<React.StrictMode>
		<App />
	</React.StrictMode>,
	document.querySelector('#root')
);
