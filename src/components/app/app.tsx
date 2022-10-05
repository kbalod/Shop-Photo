import MainCatalog from '../../pages/main-catalog/main-catalog';
import { Navigate, Route, Routes } from 'react-router-dom';
import { AppRoute } from '../../const';

function App(): JSX.Element {
  return(
    <Routes>
      <Route path={AppRoute.Main} element={<Navigate to={AppRoute.Catalog} replace />} />
      <Route path={AppRoute.Catalog} element={<MainCatalog />} />
      <Route path={AppRoute.CatalogPage} element={<MainCatalog />} />
    </Routes>
  );
}

export default App;
