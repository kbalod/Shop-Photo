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
import Pagination from './pagination';


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
    camerasTotalCount: 1,
  },
  PROCESS:{
    currentPage: 1,
  }
});
describe('Component: ProductCard', () => {
  it('should render correctly with ProductCard',async () => {
    render(
      <Provider store={store}>
        <HistoryRouter history={history}>
          <Pagination
            pagesCount={5}
          />
        </HistoryRouter>
      </Provider>
    );

    expect(await screen.findByTestId('pagination')).toBeInTheDocument();
  });
});
