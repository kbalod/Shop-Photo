import { configureMockStore } from '@jedmao/redux-mock-store';
import { render, screen } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { Provider } from 'react-redux';
import {fakeCamera} from '../../mock/mock';
import HistoryRouter from '../history-route/history-route';
import ProductCard from './product-card';

const fakeProduct = fakeCamera();
const mockStore = configureMockStore();
const history = createMemoryHistory();

describe('Component: ProductCard', () => {
  it('should render correctly with ProductCard', async () => {
    const store = mockStore();
    render(
      <Provider store={store}>
        <HistoryRouter history={history}>
          <ProductCard
            product={fakeProduct}
          />
        </HistoryRouter>
      </Provider>
    );

    expect(screen.getByText(/Цена/i)).toBeInTheDocument();
  });
});
