import {useEffect} from 'react';
import CatalogSort from '../catalog-sort/catalog-sort';
import { useAppSelector } from '../../hooks/useAppSelector';
import { getDataLoadedStatus, getCamerasTotalCount, getCamerasPage } from '../../store/cameras-data/selectors';
import Pagination from '../pagination/pagination';
import ProductCardList from '../product-card-list/product-card-list';
import { useAppDispatch } from '../../hooks/useDispatch';
import { fetchCamerasAction } from '../../store/action';
import { useParams } from 'react-router-dom';
import { setCurrentPageStore } from '../../store/cameras-data/cameras-data';
import { CutPage } from '../../const';


function ProductField() {
  const {page} = useParams();
  const dispatch = useAppDispatch();
  const loading = useAppSelector(getDataLoadedStatus);
  const pagesCount = useAppSelector(getCamerasTotalCount);
  const currentPage = useAppSelector(getCamerasPage);
  useEffect(() => {
    if(page !== undefined){
      dispatch(setCurrentPageStore(Number(page.substring(CutPage.form,CutPage.to))));
    }
  }, [dispatch, page]);
  useEffect(() => {
    dispatch(fetchCamerasAction(String(currentPage)));
  }, [currentPage, dispatch]);
  return (
    <div className="catalog__content" data-testid={'catalog'}>
      <CatalogSort />
      {loading &&
        <ProductCardList />}
      {loading &&
          <Pagination
            pagesCount={pagesCount}
          />}
    </div>
  );
}

export default ProductField;
