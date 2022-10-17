import { render, screen } from '@testing-library/react';
import {fakeCamera} from '../../mock/mock';
import ProductDetailsDescription from './product-details-description';

const fakeProduct = fakeCamera();

describe('Component: ProductDetailsDescription', () => {
  it('should render correctly with ProductDetailsDescription', () => {
    render(
      <ProductDetailsDescription
        product={fakeProduct}
      />
    );

    expect(screen.getByText(/Цена/i)).toBeInTheDocument();
  });
});
