import {useEffect} from 'react';
import CatalogSort from '../catalog-sort/catalog-sort';
import { useAppSelector } from '../../hooks/useAppSelector';
import { getDataLoadedStatus, getCamerasTotalCount, getProducts } from '../../store/cameras-data/selectors';
import Pagination from '../pagination/pagination';
import ProductCardList from '../product-card-list/product-card-list';
import { useAppDispatch } from '../../hooks/useDispatch';
import { fetchCamerasAction } from '../../store/action';
import { useParams } from 'react-router-dom';
import { CutPage } from '../../const';
import { getCamerasPage } from '../../store/process-data/selectors';
import { setCurrentPage } from '../../store/process-data/process-data';

function ProductField() {
  const {page} = useParams();
  const dispatch = useAppDispatch();
  const loading = useAppSelector(getDataLoadedStatus);
  const pagesCount = useAppSelector(getCamerasTotalCount);
  const currentPage = useAppSelector(getCamerasPage);
  const products = useAppSelector(getProducts);
  const pageFetch = String(currentPage);

  useEffect(() => {
    dispatch(fetchCamerasAction(pageFetch));
  }, [dispatch, pageFetch]);
  useEffect(() => {
    if(page !== undefined){
      dispatch(setCurrentPage(Number(page.substring(CutPage.form,CutPage.to))));
    }
  }, [dispatch, page]);

  return (
    <div className="catalog__content" data-testid={'catalog'}>
      <CatalogSort />
      {loading &&
        <ProductCardList products={products}/>}
      {loading &&
          <Pagination
            pagesCount={pagesCount}
          />}
    </div>
  );
}

export default ProductField;
