import { Link} from 'react-router-dom';
import { AppRoute, PRODUCTS_PER_VIEW } from '../../const';
import { useAppSelector } from '../../hooks/useAppSelector';
import { useAppDispatch } from '../../hooks/useDispatch';
import { setCurrentPageStore } from '../../store/cameras-data/cameras-data';
import { getCamerasPage } from '../../store/cameras-data/selectors';

type Item = {
  pagesCount: number,
}

function Pagination({pagesCount}:Item) : JSX.Element {
  const dispatch = useAppDispatch();
  const currentPage = useAppSelector(getCamerasPage);
  const PAGE_STEP = 1;
  const countInPage = Math.ceil(pagesCount / PRODUCTS_PER_VIEW);
  const paginationArray = Array.from({length: countInPage},(_,i)=>i + PAGE_STEP);

  const handleOnClickPrev = () =>{
    dispatch(setCurrentPageStore(currentPage - PAGE_STEP));
  };
  const handleOnClickNext = () =>{
    dispatch(setCurrentPageStore(currentPage + PAGE_STEP));
  };
  const handleOnClickPage = (e: MouseEvent) => {
    const target = e.target as HTMLButtonElement;
    if (target.dataset.tab){
      dispatch(setCurrentPageStore(Number(target.dataset.tab)));
    }
  };

  return (
    <div className="pagination" data-testid={'pagination'}>
      <ul className="pagination__list">
        {currentPage !== 1 &&
          <li className="pagination__item">
            <Link className="pagination__link pagination__link--text"
              to={`${AppRoute.Catalog}/page_${String(currentPage - PAGE_STEP)}`}
              onClick={handleOnClickPrev}
            >Назад
            </Link>
          </li>}
        {
          paginationArray.map((pageNumber)=>
            (
              <li className="pagination__item" key={pageNumber}>
                <Link className={`pagination__link ${currentPage === pageNumber && 'pagination__link--active'}`}
                  to={`${AppRoute.Catalog}/page_${String(pageNumber)}`}
                  data-page={`${String(pageNumber)}`}
                  onClick={()=>handleOnClickPage}
                >{pageNumber}
                </Link>
              </li>
            ))
        }
        {currentPage < countInPage &&
          <li className="pagination__item" data-testid={'pagination'}>
            <Link className="pagination__link pagination__link--text"
              to={`${AppRoute.Catalog}/page_${currentPage + PAGE_STEP}`}
              onClick={handleOnClickNext}
            >Далее
            </Link>
          </li>}
      </ul>
    </div>
  );
}

export default Pagination;
