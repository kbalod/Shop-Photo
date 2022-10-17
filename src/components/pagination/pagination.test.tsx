import { configureMockStore } from '@jedmao/redux-mock-store';
import { render, screen } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { Provider } from 'react-redux';
import HistoryRouter from '../history-route/history-route';
import Pagination from './pagination';

const fakeFunction = jest.fn();
const mockStore = configureMockStore();
const history = createMemoryHistory();

describe('Component: ProductCard', () => {
  it('should render correctly with ProductCard',async () => {
    const store = mockStore();
    render(
      <Provider store={store}>
        <HistoryRouter history={history}>
          <Pagination
            pagesCount={5}
            currentPage={0}
            setCurrentPage={fakeFunction}
          />
        </HistoryRouter>
      </Provider>
    );

    expect(await screen.findByTestId('pagination')).toBeInTheDocument();
  });
});
