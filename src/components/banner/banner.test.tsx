import { configureMockStore } from '@jedmao/redux-mock-store';
import { render, screen } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { Provider } from 'react-redux';
import { fakePromo } from '../../mock/mock';
import HistoryRouter from '../history-route/history-route';
import Banner from './banner';

const mockStore = configureMockStore();
const history = createMemoryHistory();
const store = mockStore();
const fakePromoMock = fakePromo();
describe('Component: Banner', () => {
  it('should render correctly', () => {
    render(
      <Provider store={store}>
        <HistoryRouter history={history}>
          <Banner
            promo={fakePromoMock}
          />
        </HistoryRouter>
      </Provider>
    );

    expect(screen.getByTestId('banner')).toBeInTheDocument();
  });
});
