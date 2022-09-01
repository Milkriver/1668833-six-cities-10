import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import { Provider } from 'react-redux';
import { store } from './store';
import { ToastContainer } from 'react-toastify';
import { checkAuthAction, fetchOffersAction } from './store/api-actions';
import 'react-toastify/dist/ReactToastify.css';
import browserHistory from './browser-history';
import HistoryRouter from './components/history-router/history-router';

store.dispatch(fetchOffersAction());
store.dispatch(checkAuthAction());

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <HistoryRouter history={browserHistory}>
      <Provider store={store}>
        <ToastContainer />
        <App />
      </Provider>
    </HistoryRouter>
  </React.StrictMode>,
);
