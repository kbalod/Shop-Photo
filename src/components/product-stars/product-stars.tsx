import { Star } from '../../const';
import {ReactComponent as IconFullStar} from '../../assets/img/sprite/icon-full-star.svg';
import {ReactComponent as IconStar} from '../../assets/img/sprite/icon-star.svg';

type Stars = {
  rating:number;
}
function ProductStars({rating}: Stars) : JSX.Element {
  return (
    <>
      <IconFullStar/>
      {rating >= Star.two ? <IconFullStar/> : <IconStar/>}
      {rating >= Star.three ? <IconFullStar/> : <IconStar/>}
      {rating >= Star.four ? <IconFullStar/> : <IconStar/>}
      {rating === Star.five ? <IconFullStar/> : <IconStar/>}
      <p className="visually-hidden">Рейтинг: {String(rating)}</p>
    </>
  );
}

export default ProductStars;
