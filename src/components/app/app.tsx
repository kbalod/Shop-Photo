import MainCatalog from '../../pages/main-catalog/main-catalog';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from 'react-router-dom';

function App(): JSX.Element {
  return(
    <Router>
      <Routes>
        <Route path="/" element={<MainCatalog/>}/>
      </Routes>
    </Router>
  );
}

export default App;
