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
import ModalReview from './modal-review';

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

describe('Component: ModalReview', () => {
  it('should render correctly with ModalReview',async () => {
    const fakeFunction = jest.fn();
    const fakeId = '1';
    window.scrollTo = jest.fn();

    render(
      <Provider store={store}>
        <HistoryRouter history={history}>
          <ModalReview
            id={fakeId}
            setOpenModal={fakeFunction}
            setSuccessPost={fakeFunction}
            focus
          />
        </HistoryRouter>
      </Provider>
    );

    expect(screen.getByText(/Нужно оценить товар/i)).toBeInTheDocument();
    expect(screen.getByText(/Нужно указать имя/i)).toBeInTheDocument();
    expect(screen.getByText(/Нужно указать недостатки/i)).toBeInTheDocument();
    expect(screen.getByText(/Нужно оценить товар/i)).toBeInTheDocument();
  });
});
