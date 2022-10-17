import { configureMockStore } from '@jedmao/redux-mock-store';
import { render, screen } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { Provider } from 'react-redux';
import HistoryRouter from '../history-route/history-route';
import BreadCrumb from './bread-crumb';

const mockStore = configureMockStore();
const history = createMemoryHistory();
const store = mockStore();

describe('Component: BreadCrumb', () => {
  it('should render correctly', () => {
    render(
      <Provider store={store}>
        <HistoryRouter history={history}>
          <BreadCrumb
            product={'fake'}
          />
        </HistoryRouter>
      </Provider>
    );

    expect(screen.getByTestId('breadcrumbs')).toBeInTheDocument();
  });
});
