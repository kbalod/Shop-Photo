import MainCatalog from '../../pages/main-catalog/main-catalog';
import { Navigate, Route, Routes } from 'react-router-dom';
import { AppRoute } from '../../const';
import ProductDetailed from '../../pages/product-detailed/product-detailed';
import { useAppSelector } from '../../hooks';
import { getDataLoadedStatus } from '../../store/cameras-data/selectors';
import { getProductsDataError } from '../../store/errors-data/selectors';
import NotFound from '../../pages/not-found/not-found';

function App(): JSX.Element {
  const isDataLoaded = useAppSelector(getDataLoadedStatus);
  const productsDataError = useAppSelector(getProductsDataError);

  if (productsDataError) {
    return (<p>Ошибка сервера.Попробуйте перезагрузить страницу</p>);
  } else if (!isDataLoaded) {
    return (
      <p>Загрузка</p>
    );
  }
  return(
    <Routes>
      <Route path={AppRoute.Main} element={<Navigate to={AppRoute.Catalog} replace />} />
      <Route path={AppRoute.Catalog} element={<MainCatalog />} />
      <Route path={AppRoute.CatalogPage} element={<MainCatalog />} />
      <Route path={AppRoute.Product} element={<ProductDetailed />}/>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
