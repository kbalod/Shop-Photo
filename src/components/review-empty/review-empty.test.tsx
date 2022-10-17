import { configureMockStore } from '@jedmao/redux-mock-store';
import {render, screen} from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { Provider } from 'react-redux';
import HistoryRouter from '../history-route/history-route';
import ReviewEmpty from './review-emty';


const mockStore = configureMockStore();
const history = createMemoryHistory();
const fakeSetOpenModal = jest.fn();

describe('Component: Reviews empty', () => {
  it('should render correctly', async () => {
    const store = mockStore();
    render(
      <Provider store={store}>
        <HistoryRouter history={history}>
          <ReviewEmpty
            setOpenModal={fakeSetOpenModal}
          />
        </HistoryRouter>
      </Provider>
    );

    expect(screen.getByText(/Оставьте первый отзыв/i)).toBeInTheDocument();
  });
});
