import {useState} from 'react';
import { REVIEWS_STEP } from '../../const';
import { Review } from '../../types/data';
import ProductReview from '../product-review/product-review';

type Props = {
    reviews: Review[],
    setOpenModal: (boolean:boolean) => void,
}

function Reviews({setOpenModal,reviews}: Props) {
  const [visibleReviewsCount, setVisibleReviewsCount] = useState(REVIEWS_STEP);
  const visibleReview = [...reviews].sort((reviewA, reviewB) => reviewB.createAt.localeCompare(reviewA.createAt))
    .slice(0, visibleReviewsCount);


  return (
    <div className="page-content__section">
      <section className="review-block">
        <div className="container">
          <div className="page-content__headed">
            <h2 className="title title--h3">Отзывы</h2>
            <button className="btn"
              type="button"
              onClick={()=>setOpenModal(true)}
            >Оставить свой отзыв
            </button>
          </div>
          <ul className="review-block__list">
            {visibleReview.map((review) => <ProductReview key={review.id} review={review}/>)}
          </ul>
          <div className="review-block__buttons">
            {visibleReview.length &&
              <button className="btn btn--purple"
                type="button"
                onClick={()=>setVisibleReviewsCount(visibleReviewsCount + REVIEWS_STEP)}
              >Показать больше отзывов
              </button>}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Reviews;
