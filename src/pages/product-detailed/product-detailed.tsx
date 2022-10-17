import Footer from '../../components/footer/footer';
import Header from '../../components/header/header';
import ProductDetailsCard from '../../components/product-details-card/product-details-card';


function ProductDetailed() {
  return (
    <div className="wrapper">
      <Header/>
      <ProductDetailsCard />
      <Footer/>
    </div>
  );
}

export default ProductDetailed;
