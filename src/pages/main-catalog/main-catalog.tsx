import Header from '../../components/header/header';
import Catalog from '../../components/catalog/catalog';
import Footer from '../../components/footer/footer';


function MainCatalog () : JSX.Element {
  return(
    <div className="wrapper">
      <Header />
      <Catalog />
      <Footer />
    </div>
  );
}

export default MainCatalog;
