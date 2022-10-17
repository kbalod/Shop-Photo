import { configureMockStore } from '@jedmao/redux-mock-store';
import thunk, { ThunkDispatch } from 'redux-thunk';
import { Action } from '@reduxjs/toolkit';
import { render, screen } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { Provider } from 'react-redux';
import HistoryRouter from '../history-route/history-route';
import { fakeCamera} from '../../mock/mock';
import { api } from '../../store';
import { State } from '../../types/state';
import ProductDetailsCard from './product-details-card';

const history = createMemoryHistory();
const middlewares = [thunk.withExtraArgument(api)];
const makeMockStore = configureMockStore<
  State,
  Action,
  ThunkDispatch<State, typeof api, Action>
>(middlewares);

const store = makeMockStore({
  CAMERA:{
    camera: fakeCamera(),
    review: [],
    similar: [],
  },
  ERRORS:{
    productsDataError: false,
    productDataError: false,
    productCommentsError: false,
    productSimilarError: false,
    newCommentError: false,
  }
});

describe('Component: ProductDetailsCard', () => {
  it('should render correctly with ProductDetailsCard',async () => {
    render(
      <Provider store={store}>
        <HistoryRouter history={history}>
          <ProductDetailsCard />
        </HistoryRouter>
      </Provider>
    );

    expect(await screen.findByTestId('page')).toBeInTheDocument();
  });
});
