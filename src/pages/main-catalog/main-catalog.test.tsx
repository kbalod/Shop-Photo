import { configureMockStore } from '@jedmao/redux-mock-store';
import thunk, { ThunkDispatch } from 'redux-thunk';
import { Action } from '@reduxjs/toolkit';
import { render, screen } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { Provider } from 'react-redux';
import { fakeCamera} from '../../mock/mock';
import { api } from '../../store/store';
import { State } from '../../types/state';
import MainCatalog from './main-catalog';
import HistoryRouter from '../../components/history-route/history-route';

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
    camera: [fakeCamera()],
    camerasTotalCount: 10,
    isDataLoaded: true,
    promo: null,
  },
  ERRORS:{
    productsDataError: false,
    productDataError: false,
    productCommentsError: false,
    productSimilarError: false,
    newCommentError: false,
  },
  PROCESS: {
    currentPage:1,
  }
});

describe('Component: ModalReview', () => {
  it('should render correctly with ModalReview',async () => {

    render(
      <Provider store={store}>
        <HistoryRouter history={history}>
          <MainCatalog />
        </HistoryRouter>
      </Provider>
    );

    expect(screen.getByTestId('header')).toBeInTheDocument();
    expect(screen.getByRole('main')).toBeInTheDocument();
    expect(screen.getByTestId('footer')).toBeInTheDocument();
  });
});
