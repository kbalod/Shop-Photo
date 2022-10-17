import { render, screen } from '@testing-library/react';
import ModalSuccessReview from './modal-success-review';

const fakeFunction = jest.fn();

describe('Component: ModalSuccessReview', () => {
  it('should render correctly with ModalSuccessReview', () => {
    render(
      <ModalSuccessReview
        setSuccessPost={fakeFunction}
      />
    );

    expect(screen.getByText(/Спасибо за отзыв/i)).toBeInTheDocument();
  });
});
