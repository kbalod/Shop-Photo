import { configureMockStore } from '@jedmao/redux-mock-store';
import {render, screen} from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { Provider } from 'react-redux';
import { fakeReview } from '../../mock/mock';
import HistoryRouter from '../history-route/history-route';
import Reviews from './reviews';


const fakeReviews = [fakeReview(),fakeReview(),fakeReview(),fakeReview(),fakeReview(),fakeReview(),fakeReview()];
const mockStore = configureMockStore();
const history = createMemoryHistory();
const fakeSetOpenModal = jest.fn();

describe('Component: Reviews', () => {
  it('should render correctly', async () => {
    const store = mockStore();
    render(
      <Provider store={store}>
        <HistoryRouter history={history}>
          <Reviews
            reviews={fakeReviews}
            setOpenModal={fakeSetOpenModal}
          />
        </HistoryRouter>
      </Provider>
    );

    expect(screen.getByText(/Показать больше отзывов/i)).toBeInTheDocument();
  });
});
