import { configureMockStore } from '@jedmao/redux-mock-store';
import thunk, { ThunkDispatch } from 'redux-thunk';
import { Action } from '@reduxjs/toolkit';
import { render, screen } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { Provider } from 'react-redux';
import HistoryRouter from '../history-route/history-route';
import { fakeCamera, fakePromo} from '../../mock/mock';
import { api } from '../../store/store';
import { State } from '../../types/state';
import Catalog from './catalog';

const history = createMemoryHistory();
window.scrollTo = jest.fn();
const middlewares = [thunk.withExtraArgument(api)];
const makeMockStore = configureMockStore<
  State,
  Action,
  ThunkDispatch<State, typeof api, Action>
>(middlewares);

const store = makeMockStore({
  CAMERAS:{
    camera: [fakeCamera()],
    isDataLoaded: true,
    promo: fakePromo(),
  },
  PROCESS:{
    currentPage: 1,
  }
});

describe('Component: ProductDetailsCard', () => {
  it('should render correctly with ProductDetailsCard',async () => {
    render(
      <Provider store={store}>
        <HistoryRouter history={history}>
          <Catalog />
        </HistoryRouter>
      </Provider>
    );

    expect(screen.getByRole('main')).toBeInTheDocument();
  });
});
