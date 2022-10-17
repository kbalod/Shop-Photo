import { configureMockStore } from '@jedmao/redux-mock-store';
import { render, screen } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { Provider } from 'react-redux';
import {fakeCamera} from '../../mock/mock';
import HistoryRouter from '../history-route/history-route';
import ProductCardList from './product-card-list';

const fakeProduct = [fakeCamera()];
const mockStore = configureMockStore();
const history = createMemoryHistory();

describe('Component: ProductCardList', () => {
  it('should render correctly with ProductCardList', async () => {
    const store = mockStore();
    render(
      <Provider store={store}>
        <HistoryRouter history={history}>
          <ProductCardList
            products={fakeProduct}
          />
        </HistoryRouter>
      </Provider>
    );

    expect(await screen.findByTestId('cards')).toBeInTheDocument();
  });
});
