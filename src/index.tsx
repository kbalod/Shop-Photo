import ReactDOM from 'react-dom/client';
import { StrictMode } from 'react';
import { Provider } from 'react-redux';
import App from './components/app/app';
import { store } from './store/store';
import { BrowserRouter } from 'react-router-dom';
import { fetchCamerasAction, fetchPromoProductAction } from './store/action';

store.dispatch(fetchCamerasAction('1'));
store.dispatch(fetchPromoProductAction());

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </StrictMode>
);
