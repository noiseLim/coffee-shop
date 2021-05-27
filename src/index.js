import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { BrowserRouter as Router } from 'react-router-dom';

import App from './components/App/App';
import rootReducer from './reducers';
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary';
import ShopServiceContext from './components/ShopServiceContext';
import ShopService from './services/ShopService';

import './index.scss';

const shopService = new ShopService();

const store = configureStore({
  reducer: rootReducer,
});

ReactDOM.render(
  <Provider store={store}>
    <ErrorBoundary>
      <ShopServiceContext.Provider value={shopService}>
        <Router>
          <App />
        </Router>
      </ShopServiceContext.Provider>
    </ErrorBoundary>
  </Provider>,
  document.getElementById('root')
);
