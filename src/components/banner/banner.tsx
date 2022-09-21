import { Link } from 'react-router-dom';
import { Promo } from '../../types/data';

type BannerReview = {
    props:Promo,
    id?: number,
    name?: string,
    previewImg?: string,
    previewImg2x?: string,
    previewImgWebp?: string,
    previewImgWebp2x?: string,
}

function Banner({props}:BannerReview) : JSX.Element {
  const { id,name,previewImg,previewImg2x,previewImgWebp,previewImgWebp2x} = props;
  return (
    <div className="banner">
      <picture>
        <source type="image/webp" srcSet={`${previewImgWebp} , ${previewImgWebp2x}`}/>
        <img src={`${previewImg}`} srcSet={`${previewImg2x}`} width="1280" height="280" alt="баннер" />
      </picture>
      <p className="banner__info">
        <span className="banner__message">Новинка!</span>
        <span className="title title--h1">{name}</span>
        <span className="banner__text">Профессиональная камера от&nbsp;известного производителя</span>
        <Link className="btn" to={`/${id}`}>Подробнее</Link>
      </p>
    </div>
  );
}

export default Banner;
