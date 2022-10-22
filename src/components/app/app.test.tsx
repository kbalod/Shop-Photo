import { api } from '../../store/store';
import { State } from '../../types/state';
import {render, screen} from '@testing-library/react';
import {createMemoryHistory} from 'history';
import {Provider} from 'react-redux';
import {configureMockStore} from '@jedmao/redux-mock-store';
import App from './app';
import { Action, ThunkDispatch } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import { fakeCamera } from '../../mock/mock';
import { AppRoute } from '../../const';
import HistoryRouter from '../history-route/history-route';


const middlewares = [thunk.withExtraArgument(api)];
const mockStore = configureMockStore<
  State,
  Action,
  ThunkDispatch<State, typeof api, Action>
>(middlewares);

const history = createMemoryHistory();

const camera = fakeCamera();
const cameras = [fakeCamera(),fakeCamera(),fakeCamera(),fakeCamera()];

const store = mockStore({
  CAMERAS:{
    camera: cameras,
    isDataLoaded: true,
    promo: null,
  },
  CAMERA: {
    camera: camera,
    review: [],
    similar: [],
  },
  ERRORS: {
    productsDataError: false,
    productDataError: false,
    productCommentsError: false,
    productSimilarError: false,
    newCommentError: false,
  }

});

const fakeApp = (
  <Provider store={store}>
    <HistoryRouter history={history}>
      <App />
    </HistoryRouter>
  </Provider>
);

describe('Application Routing', () => {
  it('should render "WelcomeScreen" when user navigate to "/"', () => {
    history.push(AppRoute.Main);

    render(fakeApp);

    expect(screen.getByText(/Каталог фото- и видеотехники/i)).toBeInTheDocument();
  });
  it('should render product page when user navigate to "/product/:id"', () => {
    history.push(`${AppRoute.Camera}${1}`);

    render(fakeApp);

    expect(screen.getByText(/Похожие товары/i)).toBeInTheDocument();
  });

  it('should render "NotFound" when user navigate to non-existent route', () => {
    history.push('/non-existent-route');

    render(fakeApp);

    expect(screen.getByText(/Страницы не существует/i)).toBeInTheDocument();
  });
});
