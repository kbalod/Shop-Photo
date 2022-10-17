import { render, screen } from '@testing-library/react';
import {fakeReview } from '../../mock/mock';
import ProductReview from './product-review';

const fakeReviewTest = fakeReview();

describe('Component: ProductReview', () => {
  it('should render correctly with ProductReview', () => {
    render(
      <ProductReview
        review={fakeReviewTest}
      />
    );

    expect(screen.getByText(/Достоинства/i)).toBeInTheDocument();
    expect(screen.getByText(/Недостатки/i)).toBeInTheDocument();
    expect(screen.getByText(/Комментарий/i)).toBeInTheDocument();
  });
});
