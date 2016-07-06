import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store';

import Main from './containers/Main';

// auto-generated, attempt to get the initial state from another source, such as localStorage
const initialState = {};
const store = configureStore(initialState);

render(
    <Provider store={store}>
        <div>
            Hey this is the best app ever
            <Main />
        </div>
    </Provider>,
    document.getElementById('app1-cont')
);
