import FocusTrap from 'focus-trap-react';

type ModalAction = {
    setSuccessPost: (boolean : boolean) => void,
}
function ModalSuccessReview({setSuccessPost}: ModalAction) : JSX.Element {
  document.body.classList.add('scroll-lock');
  const handleOnClickSuccess = () => {
    document.body.classList.remove('scroll-lock');
    setSuccessPost(false);
  };
  const handlePressEsc = (e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      document.removeEventListener('keydown', handlePressEsc);
      document.body.classList.remove('scroll-lock');
      setSuccessPost(false);
    }
  };
  document.addEventListener('keydown', handlePressEsc);
  return (
    <div className="modal is-active modal--narrow">
      <FocusTrap>
        <div className="modal__wrapper">
          <div className="modal__overlay" onClick={handleOnClickSuccess}></div>
          <div className="modal__content">
            <p className="title title--h4">Спасибо за отзыв</p>
            <svg className="modal__icon" width="80" height="78" aria-hidden="true">
              <use xlinkHref="#icon-review-success"></use>
            </svg>
            <div className="modal__buttons">
              <button className="btn btn--purple modal__btn modal__btn--fit-width"
                type="button"
                onClick={handleOnClickSuccess}
              >Вернуться к покупкам
              </button>
            </div>
            <button className="cross-btn"
              type="button"
              aria-label="Закрыть попап"
              onClick={handleOnClickSuccess}
            >
              <svg width="10" height="10" aria-hidden="true">
                <use xlinkHref="#icon-close"></use>
              </svg>
            </button>
          </div>
        </div>
      </FocusTrap>
    </div>
  );
}

export default ModalSuccessReview;
