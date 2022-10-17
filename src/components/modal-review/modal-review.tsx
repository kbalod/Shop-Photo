import { FormEvent, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { fetchReviewsAction, postReviewAction } from '../../store/action';
import { getNewCommentError } from '../../store/errors-data/selectors';
import { PostReview } from '../../types/data';

type Modal = {
  id: string,
  setOpenModal: (boolean:boolean) => void,
  setSuccessPost: (boolean:boolean) => void,
}
function ModalReview({id,setOpenModal,setSuccessPost} : Modal) : JSX.Element {
  const MIN_REVIEW_LENGTH = 1;
  const dispatch = useAppDispatch();
  const newCommentError = useAppSelector(getNewCommentError);
  const [formDisabled, setFormDisabled] = useState<boolean>(false);
  const [formState, setFormState] = useState<PostReview>({
    cameraId: Number(id),
    userName: '',
    advantage: '',
    disadvantage: '',
    review: '',
    rating: 0,
  });

  const onSubmit = async (newReview: PostReview) => {
    await dispatch(postReviewAction(newReview));
    setFormDisabled(false);
    if(!newCommentError){
      await dispatch(fetchReviewsAction(id));
      setOpenModal(false);
      setSuccessPost(true);
    }
  };

  const handleFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormDisabled(true);
    onSubmit(formState);
  };
  return (
    <div className="modal is-active">
      <div className="modal__wrapper">
        <div className="modal__overlay"></div>
        <div className="modal__content">
          <p className="title title--h4">Оставить отзыв</p>
          <div className="form-review">
            <form method="post" onSubmit={handleFormSubmit}>
              <div className="form-review__rate">
                <fieldset className={`rate form-review__item ${(!formState.rating && formDisabled) ? 'is-invalid' : ''}`}>
                  <legend className="rate__caption">Рейтинг
                    <svg width="9" height="9" aria-hidden="true">
                      <use xlinkHref="#icon-snowflake"></use>
                    </svg>
                  </legend>
                  <div className="rate__bar">
                    <div className="rate__group">
                      <input className="visually-hidden" id="star-5" name="rate" type="radio" value="5" onChange={(evt) => setFormState({...formState, rating: +evt.currentTarget.value})} />
                      <label className="rate__label" htmlFor="star-5" title="Отлично"></label>
                      <input className="visually-hidden" id="star-4" name="rate" type="radio" value="4" onChange={(evt) => setFormState({...formState, rating: +evt.currentTarget.value})} />
                      <label className="rate__label" htmlFor="star-4" title="Хорошо"></label>
                      <input className="visually-hidden" id="star-3" name="rate" type="radio" value="3" onChange={(evt) => setFormState({...formState, rating: +evt.currentTarget.value})} />
                      <label className="rate__label" htmlFor="star-3" title="Нормально"></label>
                      <input className="visually-hidden" id="star-2" name="rate" type="radio" value="2" onChange={(evt) => setFormState({...formState, rating: +evt.currentTarget.value})} />
                      <label className="rate__label" htmlFor="star-2" title="Плохо"></label>
                      <input className="visually-hidden" id="star-1" name="rate" type="radio" value="1" onChange={(evt) => setFormState({...formState, rating: +evt.currentTarget.value})} />
                      <label className="rate__label" htmlFor="star-1" title="Ужасно"></label>
                    </div>
                    <div className="rate__progress"><span className="rate__stars">{formState.rating}</span> <span>/</span> <span className="rate__all-stars">5</span>
                    </div>
                  </div>
                  <p className="rate__message">Нужно оценить товар</p>
                </fieldset>
                <div className={`custom-input form-review__item ${(!formState.userName && formDisabled) ? 'is-invalid' : ''}`}>
                  <label>
                    <span className="custom-input__label">Ваше имя
                      <svg width="9" height="9" aria-hidden="true">
                        <use xlinkHref="#icon-snowflake"></use>
                      </svg>
                    </span>
                    <input type="text" name="user-name" placeholder="Введите ваше имя" onChange={(evt) => setFormState({...formState, userName: evt.currentTarget.value})} />
                  </label>
                  <p className="custom-input__error">Нужно указать имя</p>
                </div>
                <div className={`custom-input form-review__item ${(!formState.advantage && formDisabled) ? 'is-invalid' : ''}`}>
                  <label>
                    <span className="custom-input__label">Достоинства
                      <svg width="9" height="9" aria-hidden="true">
                        <use xlinkHref="#icon-snowflake"></use>
                      </svg>
                    </span>
                    <input type="text" name="user-plus" placeholder="Основные преимущества товара" onChange={(evt) => setFormState({...formState, advantage: evt.currentTarget.value})} />
                  </label>
                  <p className="custom-input__error">Нужно указать достоинства</p>
                </div>
                <div className={`custom-input form-review__item ${(!formState.disadvantage && formDisabled) ? 'is-invalid' : ''}`}>
                  <label>
                    <span className="custom-input__label">Недостатки
                      <svg width="9" height="9" aria-hidden="true">
                        <use xlinkHref="#icon-snowflake"></use>
                      </svg>
                    </span>
                    <input type="text" name="user-minus" placeholder="Главные недостатки товара" onChange={(evt) => setFormState({...formState, disadvantage: evt.currentTarget.value})} />
                  </label>
                  <p className="custom-input__error">Нужно указать недостатки</p>
                </div>
                <div className={`custom-textarea form-review__item ${(!(formState.review.length >= MIN_REVIEW_LENGTH) && formDisabled) ? 'is-invalid' : ''}`}>
                  <label>
                    <span className="custom-textarea__label">Комментарий
                      <svg width="9" height="9" aria-hidden="true">
                        <use xlinkHref="#icon-snowflake"></use>
                      </svg>
                    </span>
                    <textarea
                      name="user-comment"
                      placeholder="Поделитесь своим опытом покупки"
                      onChange={(evt) => setFormState({...formState, review: evt.currentTarget.value})}
                    >
                    </textarea>
                  </label>
                  <div className="custom-textarea__error">Нужно добавить комментарий</div>
                </div>
              </div>
              <button className="btn btn--purple form-review__btn" type="submit">Отправить отзыв</button>
            </form>
          </div>
          <button className="cross-btn" type="button" aria-label="Закрыть попап" onClick={() => setOpenModal(false)}>
            <svg width="10" height="10" aria-hidden="true">
              <use xlinkHref="#icon-close"></use>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

export default ModalReview;

