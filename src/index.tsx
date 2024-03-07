import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
// import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
// import rootReducer from './services/reducers/rootReducer';
import store from './services/store/configureStore';
// import { HashRouter } from 'react-router-dom'; // нужно заменить на него, при деплое через gh-pages
import App from './components/App/App';

const rootElement = document.getElementById('root');
if (!rootElement) throw new Error('Failed to find the root element');

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App/>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
);
