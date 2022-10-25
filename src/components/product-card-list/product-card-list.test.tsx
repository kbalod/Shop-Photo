import { configureMockStore } from '@jedmao/redux-mock-store';
import thunk, { ThunkDispatch } from 'redux-thunk';
import { Action } from '@reduxjs/toolkit';
import { render, screen } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { Provider } from 'react-redux';
import {fakeCamera} from '../../mock/mock';
import { api } from '../../store/store';
import { State } from '../../types/state';
import HistoryRouter from '../history-route/history-route';
import ProductCardList from './product-card-list';

const history = createMemoryHistory();

const middlewares = [thunk.withExtraArgument(api)];
const makeMockStore = configureMockStore<
  State,
  Action,
  ThunkDispatch<State, typeof api, Action>
>(middlewares);

const store = makeMockStore({
  CAMERAS:{
    camera:[fakeCamera(),fakeCamera()],
    isDataLoaded:true,
    promo: null,
    camerasTotalCount: 1,
  },
});
const fakeProduct = [fakeCamera()];
describe('Component: ProductCardList', () => {
  it('should render correctly with ProductCardList', async () => {
    render(
      <Provider store={store}>
        <HistoryRouter history={history}>
          <ProductCardList products={fakeProduct}/>
        </HistoryRouter>
      </Provider>
    );

    expect(await screen.findByTestId('cards')).toBeInTheDocument();
  });
});
