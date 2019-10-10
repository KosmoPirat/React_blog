import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router} from 'react-router-dom';
import { Provider } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';

import Layout from './app/layouts/Layout';
import store from "./app/stores/store";


ReactDOM.render(
    <Provider store={store}>
        <Router basename="/React_blog">
            <Layout/>
        </Router>
    </Provider>,
    document.getElementById('root'));


