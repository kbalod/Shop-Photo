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


function ProductField(): JSX.Element {
  const {page} = useParams();
  const dispatch = useAppDispatch();
  const loading = useAppSelector(getDataLoadedStatus);
  const currentPage = useAppSelector(getCamerasPage);
  useEffect(() => {
    if(page !== undefined){
      dispatch(setCurrentPage(Number(page.substring(CutPage.form,CutPage.to))));
    }
  }, [currentPage, dispatch, page]);
  useEffect(() => {
    if(page !== undefined){
      dispatch(fetchCamerasAction(String(page.substring(CutPage.form,CutPage.to))));
    }
    if(page === undefined){
      dispatch(fetchCamerasAction('1'));
    }
  }, [dispatch, page]);

  const pagesCount = useAppSelector(getCamerasTotalCount);
  const products = useAppSelector(getProducts);
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
