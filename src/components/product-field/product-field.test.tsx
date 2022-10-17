import { configureMockStore } from '@jedmao/redux-mock-store';
import thunk, { ThunkDispatch } from 'redux-thunk';
import { Action } from '@reduxjs/toolkit';
import { render, screen } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { Provider } from 'react-redux';
import HistoryRouter from '../history-route/history-route';
import ProductField from './product-field';
import { fakeCamera} from '../../mock/mock';
import { api } from '../../store';
import { State } from '../../types/state';

const history = createMemoryHistory();
const middlewares = [thunk.withExtraArgument(api)];
const makeMockStore = configureMockStore<
  State,
  Action,
  ThunkDispatch<State, typeof api, Action>
>(middlewares);

const store = makeMockStore({
  CAMERAS:{
    camera:[fakeCamera()],
    isDataLoaded:true,
    promo: null,
  },
});

describe('Component: ProductField', () => {
  it('should render correctly with ProductField',async () => {
    render(
      <Provider store={store}>
        <HistoryRouter history={history}>
          <ProductField />
        </HistoryRouter>
      </Provider>
    );

    expect(await screen.findByTestId('catalog')).toBeInTheDocument();
  });
});

