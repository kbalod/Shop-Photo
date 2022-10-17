import dayjs from 'dayjs';
import 'dayjs/locale/ru';
import { DateData} from '../../const';
import { Review } from '../../types/data';
import ProductStars from '../product-stars/product-stars';
type Props = {
    review: Review,
}

function ProductReview({review}: Props) {
  return (
    <li className="review-card">
      <div className="review-card__head">
        <p className="title title--h4">{review.userName}</p>
        <time className="review-card__data" dateTime={dayjs(review.createAt).format(DateData.DateTimeFormat)}>
          {dayjs(review.createAt).locale(DateData.Locale).format(DateData.ReviewFormat)}
        </time>
      </div>
      <div className="rate review-card__rate">
        <ProductStars rating={review.rating}/>
      </div>
      <ul className="review-card__list">
        <li className="item-list"><span className="item-list__title">Достоинства:</span>
          <p className="item-list__text">{review.advantage}</p>
        </li>
        <li className="item-list"><span className="item-list__title">Недостатки:</span>
          <p className="item-list__text">{review.disadvantage}</p>
        </li>
        <li className="item-list"><span className="item-list__title">Комментарий:</span>
          <p className="item-list__text">{review.review}</p>
        </li>
      </ul>
    </li>
  );
}

export default ProductReview;
