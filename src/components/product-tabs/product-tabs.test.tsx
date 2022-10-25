import { configureMockStore } from '@jedmao/redux-mock-store';
import thunk, { ThunkDispatch } from 'redux-thunk';
import { Action } from '@reduxjs/toolkit';
import { render, screen } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { Provider } from 'react-redux';
import HistoryRouter from '../history-route/history-route';
import { fakeCamera} from '../../mock/mock';
import { api } from '../../store/store';
import { State } from '../../types/state';
import ProductTabs from './product-tabs';

const history = createMemoryHistory();
const middlewares = [thunk.withExtraArgument(api)];
window.scrollTo = jest.fn();
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
});
const fakeSetDescription = jest.fn();

describe('Component: ProductTabs', () => {
  it('should render correctly', async () => {
    render(
      <Provider store={store}>
        <HistoryRouter history={history}>
          <ProductTabs
            product={fakeCamera()}
            description
            setDescription={fakeSetDescription}
          />
        </HistoryRouter>
      </Provider>
    );

    expect(screen.getByText(/Артикул/i)).toBeInTheDocument();
  });
  it('should render correctly if description false', async () => {
    render(
      <Provider store={store}>
        <HistoryRouter history={history}>
          <ProductTabs
            product={fakeCamera()}
            description={false}
            setDescription={fakeSetDescription}
          />
        </HistoryRouter>
      </Provider>
    );

    expect(screen.getByTestId('description')).toBeInTheDocument();
  });
});
