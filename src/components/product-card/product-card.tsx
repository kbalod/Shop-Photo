import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';
import { Camera } from '../../types/data';
import ProductStars from '../product-stars/product-stars';

type Card = {
    product: Camera,
    type?:string,
}

function ProductCard ({product,type}:Card) : JSX.Element {
  const {id,name,rating,price,previewImg,
    previewImg2x,previewImgWebp,previewImgWebp2x,reviewCount} = product;

  return (
    <div className={`product-card ${type === 'similar' ? 'is-active' : ''}`}>
      <div className="product-card__img">
        <picture>
          <source type="image/webp" srcSet={`/${previewImgWebp} , /${previewImgWebp2x} 2x`}/>
          <img src={`/${previewImg}`} srcSet={`/${previewImg2x} 2x`} width="280" height="240" alt={name}/>
        </picture>
      </div>
      <div className="product-card__info">
        <div className="rate product-card__rate">
          <ProductStars rating={rating} />
          <p className="rate__count"><span className="visually-hidden">Всего оценок:</span>{reviewCount}</p>
        </div>
        <p className="product-card__title">{name}</p>
        <p className="product-card__price"><span className="visually-hidden">Цена:</span>{`${price}₽`}
        </p>
      </div>
      <div className="product-card__buttons">
        <button className="btn btn--purple product-card__btn" type="button">Купить
        </button>
        <Link className="btn btn--transparent" to={`${AppRoute.Camera}${id}`}>Подробнее
        </Link>
      </div>
    </div>
  );
}

export default ProductCard;
