
type Props = {
    setOpenModal: (boolean:boolean) => void,
}

function ReviewEmpty({setOpenModal}: Props) {

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
          <p>Оставьте первый отзыв</p>
        </div>
      </section>
    </div>
  );
}

export default ReviewEmpty;
