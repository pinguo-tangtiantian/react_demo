import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';

import Giftwall from './js/Giftwall.js';
import Home from './js/Home.js';
// import Newtask from './js/newtask.js';
import registerServiceWorker from './registerServiceWorker';

import Common from './js/lib/common.js';
import './index.css';

Common.setHtmlFontSize();
ReactDOM.render(
    <Router history={browserHistory}>
        <Route path='/' component={Home} />
        <Route path='/giftWall' component={Giftwall} />
        {/* <Route path='/newTask' component={Newtask} /> */}
    </Router>, document.getElementById('page')
    );

registerServiceWorker();
