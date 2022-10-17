import { useState } from 'react';
import { DEFAULT_MAX_SIMILAR, SIMILAR_STEP, START_SIMILAR_INDEX } from '../../const';
import { Camera } from '../../types/data';
import ProductCard from '../product-card/product-card';
import SimilarProductsButtons from '../similar-products-buttons/similar-products-buttons';

type Props = {
    similar: Camera[],
}

function SimilarProducts({similar}: Props) : JSX.Element {
  const [currentSimilar,setCurrentSimilar] = useState<number>(START_SIMILAR_INDEX);
  return (
    <div className="page-content__section">
      <section className="product-similar">
        <div className="container">
          <h2 className="title title--h3">Похожие товары</h2>
          <div className="product-similar__slider">
            <div className="product-similar__slider-list">
              {similar.slice(currentSimilar,(currentSimilar + DEFAULT_MAX_SIMILAR)).map((product: Camera)=>(
                <ProductCard
                  key={product.id}
                  product={product}
                  type={'similar'}
                />))}
            </div>
            <SimilarProductsButtons
              visibleSimilar={similar}
              currentSimilar={currentSimilar}
              setCurrentSimilar={setCurrentSimilar}
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export default SimilarProducts;
