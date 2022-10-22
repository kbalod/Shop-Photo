import { configureMockStore } from '@jedmao/redux-mock-store';
import { render, screen } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { Provider } from 'react-redux';
import HistoryRouter from '../../components/history-route/history-route';

import NotFound from './not-found';

const mockStore = configureMockStore();
const history = createMemoryHistory();
const store = mockStore();

describe('Component: CatalogSort', () => {
  it('should render correctly', () => {
    render(
      <Provider store={store}>
        <HistoryRouter history={history}>
          <NotFound />
        </HistoryRouter>
      </Provider>
    );

    expect(screen.getByText(/Страницы не существует/i)).toBeInTheDocument();
  });
});
