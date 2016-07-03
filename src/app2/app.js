import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store';

// auto-generated, attempt to get the initial state from another source, such as localStorage
const initialState = {};
const store = configureStore(initialState);

render(
    <Provider store={store}>
        <div>this is also a pretty cool app</div>
    </Provider>,
    document.getElementById('app2-cont')
);

