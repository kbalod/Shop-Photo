import { configureMockStore } from '@jedmao/redux-mock-store';
import { render, screen } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { Provider } from 'react-redux';
import HistoryRouter from '../history-route/history-route';
import CatalogSort from './catalog-sort';

const mockStore = configureMockStore();
const history = createMemoryHistory();
const store = mockStore();

describe('Component: CatalogSort', () => {
  it('should render correctly', () => {
    render(
      <Provider store={store}>
        <HistoryRouter history={history}>
          <CatalogSort />
        </HistoryRouter>
      </Provider>
    );

    expect(screen.getByTestId('sort')).toBeInTheDocument();
  });
});
