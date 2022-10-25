import { Camera } from '../../types/data';
import ProductCard from '../product-card/product-card';

type Products = {
  products: Camera[],
}
function ProductCardList ({products}: Products) : JSX.Element {
  return (
    <div className="cards catalog__cards" data-testid={'cards'}>
      {products.map((product : Camera) => <ProductCard key={product.id} product={product}/>)}
    </div>
  );
}

export default ProductCardList;
