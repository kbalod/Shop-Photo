import {useState} from 'react';
import { Camera } from '../../types/data';
import ProductStars from '../product-stars/product-stars';
import ProductTabs from '../product-tabs/product-tabs';

type Props = {
    product: Camera,
}

function ProductDetailsDescription({product}: Props) {
  const [description,setDescription] = useState(true);
  return (
    <div className="page-content__section">
      <section className="product">
        <div className="container">
          <div className="product__img">
            <picture>
              <source type="image/webp" srcSet={`/${product.previewImgWebp} , /${product.previewImgWebp2x} 2x`}/>
              <img src={`/${product.previewImg}`} srcSet={`/${product.previewImg} 2x`} width="560" height="480" alt={product.name}/>
            </picture>
          </div>
          <div className="product__content">
            <h1 className="title title--h3">{product.name}</h1>
            <div className="rate product__rate">
              <ProductStars rating={product.rating} />
              <p className="rate__count"><span className="visually-hidden">Всего оценок:</span>{product.reviewCount}</p>
            </div>
            <p className="product__price"><span className="visually-hidden">Цена:</span>{`${product.price} ₽`}</p>
            <button className="btn btn--purple" type="button">
              <svg width="24" height="16" aria-hidden="true">
                <use xlinkHref="#icon-add-basket"></use>
              </svg>Добавить в корзину
            </button>
            <ProductTabs product={product} description={description }setDescription={setDescription}/>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ProductDetailsDescription;
