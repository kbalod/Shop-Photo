import { configureMockStore } from '@jedmao/redux-mock-store';
import {render, screen} from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { Provider } from 'react-redux';
import { fakeCamera } from '../../mock/mock';
import HistoryRouter from '../history-route/history-route';
import ProductTabs from './product-tabs';


const mockStore = configureMockStore();
const history = createMemoryHistory();
const fakeProduct = fakeCamera();
const fakeSetDescription = jest.fn();

describe('Component: ProductTabs', () => {
  it('should render correctly', async () => {
    const store = mockStore();
    render(
      <Provider store={store}>
        <HistoryRouter history={history}>
          <ProductTabs
            product={fakeProduct}
            description
            setDescription={fakeSetDescription}
          />
        </HistoryRouter>
      </Provider>
    );

    expect(screen.getByText(/Артикул/i)).toBeInTheDocument();
  });
  it('should render correctly if description false', async () => {
    const store = mockStore();
    render(
      <Provider store={store}>
        <HistoryRouter history={history}>
          <ProductTabs
            product={fakeProduct}
            description={false}
            setDescription={fakeSetDescription}
          />
        </HistoryRouter>
      </Provider>
    );

    expect(screen.getByTestId('description')).toBeInTheDocument();
  });
});
