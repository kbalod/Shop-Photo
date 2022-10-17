import { useState} from 'react';
import CatalogSort from '../catalog-sort/catalog-sort';
import { useAppSelector } from '../../hooks/useAppSelector';
import { getProducts, getDataLoadedStatus } from '../../store/cameras-data/selectors';
import Pagination from '../pagination/pagination';
import ProductCardList from '../product-card-list/product-card-list';
import { DEFAULT_PAGE, PRODUCTS_PER_VIEW } from '../../const';


function ProductField() {
  const products = useAppSelector(getProducts);
  const loading = useAppSelector(getDataLoadedStatus);

  const [currentPage, setCurrentPage] = useState(DEFAULT_PAGE);
  const pagesCount = Math.ceil(products.length / PRODUCTS_PER_VIEW);

  return (
    <div className="catalog__content" data-testid={'catalog'}>
      <CatalogSort />
      {loading ?
        <ProductCardList products={products.slice(PRODUCTS_PER_VIEW * currentPage - PRODUCTS_PER_VIEW, PRODUCTS_PER_VIEW * currentPage)} />
        : ''}
      {!!products.length &&
          <Pagination
            pagesCount={pagesCount}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />}
    </div>
  );
}

export default ProductField;
