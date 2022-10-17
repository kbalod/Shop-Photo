import { render, screen } from '@testing-library/react';
import ProductStars from './product-stars';


describe('Component: ProductStars', () => {
  it('should render correctly with reviews count', () => {
    const MAX_RATING = 5;
    render(
      <ProductStars
        rating={MAX_RATING}
      />
    );

    expect(screen.getByText(`Рейтинг: ${MAX_RATING}`)).toBeInTheDocument();
  });
});
