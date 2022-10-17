import { configureMockStore } from '@jedmao/redux-mock-store';
import {render, screen} from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { Provider } from 'react-redux';
import { fakeCamera } from '../../mock/mock';
import HistoryRouter from '../history-route/history-route';
import SimilarProducts from './similar-products';

const fakeSimilar = [fakeCamera(),fakeCamera(),fakeCamera(),fakeCamera(),fakeCamera(),fakeCamera()];
const mockStore = configureMockStore();
const history = createMemoryHistory();

describe('Component: SimilarProducts', () => {
  it('should render correctly', async () => {
    const store = mockStore();
    render(
      <Provider store={store}>
        <HistoryRouter history={history}>
          <SimilarProducts
            similar={fakeSimilar}
          />
        </HistoryRouter>
      </Provider>
    );

    expect(screen.getByText(/Похожие товары/i)).toBeInTheDocument();
  });
});
