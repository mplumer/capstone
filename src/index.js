import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { Elements } from '@stripe/react-stripe-js';

import App from './App';

import { store, persistor } from './store/store';
import { stripePromise } from './utils/stripe/stripe.utils';

import './index.scss';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* Entire application is wrapped in Provider which holds the store  */}
    <Provider store={store}>
      {/* PersistGate is used to persist the store over multiple trips to the site */}
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          {/* Elements is used to handle the payment processing */}
          <Elements stripe={stripePromise}>
            <App />
          </Elements>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
