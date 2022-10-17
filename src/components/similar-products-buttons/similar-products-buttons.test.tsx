import {render, screen} from '@testing-library/react';
import { fakeCamera } from '../../mock/mock';
import SimilarProductsButtons from './similar-products-buttons';

const fakeVisibleSimilar = [fakeCamera(),fakeCamera(),fakeCamera(),fakeCamera(),fakeCamera(),fakeCamera()];
const fakeFunction = jest.fn();

describe('Component: SimilarProductsButtons', () => {
  it('should render correctly', () => {
    render(
      <SimilarProductsButtons
        visibleSimilar={fakeVisibleSimilar}
        currentSimilar={0}
        setCurrentSimilar={fakeFunction}
      />);

    expect(screen.getByTestId('left-arrow')).toBeInTheDocument();
    expect(screen.getByTestId('right-arrow')).toBeInTheDocument();
    expect(screen.getByTestId('left-arrow')).toHaveAttribute('disabled');
    expect(screen.getByTestId('right-arrow')).not.toHaveAttribute('disabled');
  });
});
