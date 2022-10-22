import { useAppSelector } from '../../hooks/useAppSelector';
import { getProducts } from '../../store/cameras-data/selectors';
import { Camera } from '../../types/data';
import ProductCard from '../product-card/product-card';

function ProductCardList () {
  const products = useAppSelector(getProducts);
  return (
    <div className="cards catalog__cards" data-testid={'cards'}>
      {products.map((product : Camera) => <ProductCard key={product.id} product={product}/>)}
    </div>
  );
}

export default ProductCardList;
