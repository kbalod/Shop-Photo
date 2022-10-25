import { configureMockStore } from '@jedmao/redux-mock-store';
import {render, screen} from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { Provider } from 'react-redux';
import { fakeCamera } from '../../mock/mock';
import HistoryRouter from '../history-route/history-route';
import ProductDetailsDescription from './product-details-description';


const mockStore = configureMockStore();
const history = createMemoryHistory();
window.scrollTo = jest.fn();
describe('Component: ModalSuccessReview', () => {
  it('should render correctly with ModalSuccessReview', async () => {
    const store = mockStore();
    render(
      <Provider store={store}>
        <HistoryRouter history={history}>
          <ProductDetailsDescription
            product={fakeCamera()}
          />
        </HistoryRouter>
      </Provider>
    );

    expect(screen.getByText(/Цена/i)).toBeInTheDocument();
  });
});
