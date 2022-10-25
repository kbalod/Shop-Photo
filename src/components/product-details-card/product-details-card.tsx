import { useEffect, useState } from 'react';
import { Navigate, useParams } from 'react-router-dom';
import { AppRoute } from '../../const';
import { useAppDispatch } from '../../hooks/useDispatch';
import { useAppSelector } from '../../hooks/useAppSelector';
import { fetchCameraAction, fetchReviewsAction, fetchSimilarAction } from '../../store/action';
import { getProduct, getReview, getSimilar} from '../../store/camera-data/selectors';
import { getProductDataError } from '../../store/errors-data/selectors';
import BreadCrumb from '../bread-crumbs/bread-crumb';
import ModalReview from '../modal-review/modal-review';
import ModalSuccessReview from '../modal-success-review/modal-success-review';
import ProductDetailsDescription from '../product-datails-description/product-details-description';
import ReviewEmpty from '../review-empty/review-emty';
import Reviews from '../reviews/reviews';
import SimilarProducts from '../similar-products/similar-products';
import UpButton from '../up-button/up-button';

function ProductDetailsCard() {
  const dispatch = useAppDispatch();
  const {id} = useParams();
  const product = useAppSelector(getProduct);
  const reviews = useAppSelector(getReview);
  const similar = useAppSelector(getSimilar);
  const productError = useAppSelector(getProductDataError);
  const [openModal,setOpenModal] = useState<boolean>(false);
  const [successPost,setSuccessPost] = useState<boolean>(false);

  useEffect(() => {
    if (id) {
      dispatch(fetchCameraAction(id));
      dispatch(fetchReviewsAction(id));
      dispatch(fetchSimilarAction(id));
    }
  }, [dispatch, id]);

  if (!productError) {
    if (!product) {
      return (<p>Загрузка</p>);
    }
  } else {
    return (<Navigate to={AppRoute.NotFound} />);
  }

  return (
    <main>
      <div className="page-content" data-testid={'page'}>
        {product && <BreadCrumb product={product.name}/>}
        {product && <ProductDetailsDescription product={product}/>}
        {similar && id !== undefined && <SimilarProducts similar={similar} />}
        {reviews !== null && reviews.length > 0 ? <Reviews reviews={reviews} setOpenModal={setOpenModal}/>
          : <ReviewEmpty setOpenModal={setOpenModal}/> }
      </div>
      <UpButton />
      {openModal && id !== undefined && <ModalReview id={id} setOpenModal={setOpenModal} setSuccessPost={setSuccessPost}/> }
      {successPost && <ModalSuccessReview setSuccessPost={setSuccessPost}/>}
    </main>
  );
}

export default ProductDetailsCard;

