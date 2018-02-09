import React from 'react';
import ReactDOM from 'react-dom';
import ReactGA from 'react-ga';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactGA.initialize('UA-113868571-1'); //Unique Google Analytics tracking number
ReactGA.pageview(window.location.pathname);

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
