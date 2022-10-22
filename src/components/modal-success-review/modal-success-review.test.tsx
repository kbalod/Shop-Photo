import { configureMockStore } from '@jedmao/redux-mock-store';
import {render, screen} from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { Provider } from 'react-redux';
import HistoryRouter from '../history-route/history-route';
import ModalSuccessReview from './modal-success-review';


const fakeFunction = jest.fn();
const mockStore = configureMockStore();
const history = createMemoryHistory();

describe('Component: ModalSuccessReview', () => {
  it('should render correctly with ModalSuccessReview', async () => {
    const store = mockStore();
    render(
      <Provider store={store}>
        <HistoryRouter history={history}>
          <div>
            <ModalSuccessReview
              setSuccessPost={fakeFunction}
            />
          </div>
        </HistoryRouter>
      </Provider>
    );

    expect(screen.getByText(/Спасибо за отзыв/i)).toBeInTheDocument();
  });
});
