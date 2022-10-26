import MainCatalog from '../../pages/main-catalog/main-catalog';
import { Route, Routes } from 'react-router-dom';
import { AppRoute } from '../../const';
import ProductDetailed from '../../pages/product-detailed/product-detailed';
import { getProductsDataError } from '../../store/errors-data/selectors';
import NotFound from '../../pages/not-found/not-found';
import { useAppSelector } from '../../hooks/useAppSelector';

function App(): JSX.Element {
  const productsDataError = useAppSelector(getProductsDataError);
  if (productsDataError) {
    return (<p>Ошибка сервера.Попробуйте перезагрузить страницу</p>);
  }
  return(
    <Routes>
      <Route path={AppRoute.Main}>
        <Route index element={<MainCatalog />} />
        <Route path={AppRoute.CatalogPage} element={<MainCatalog />} />
        <Route path={AppRoute.Product} element={<ProductDetailed />}/>
        <Route path={`${AppRoute.Product}/:tabs`} element={<ProductDetailed />}/>
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
