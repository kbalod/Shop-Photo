import { Link} from 'react-router-dom';
import { AppRoute } from '../../const';

type Item = {
  pagesCount: number,
  currentPage:number,
  setCurrentPage: (arg: number) => void,
}

function Pagination({pagesCount,currentPage,setCurrentPage}:Item) : JSX.Element {
  const PAGE_STEP = 1;
  const paginationArray = Array.from({length: pagesCount},(_,i)=>i + PAGE_STEP);

  return (
    <div className="pagination">
      <ul className="pagination__list">
        {currentPage !== PAGE_STEP &&
          <li className="pagination__item">
            <Link className="pagination__link pagination__link--text"
              to={`${AppRoute.Catalog}/page_${String(currentPage - PAGE_STEP)}`}
              onClick={() => setCurrentPage(currentPage - PAGE_STEP)}
            >Назад
            </Link>
          </li>}
        {
          paginationArray.map((pageNumber)=>
            (
              <li className="pagination__item" key={pageNumber}>
                <Link className={`pagination__link ${currentPage === pageNumber && 'pagination__link--active'}`}
                  to={`${AppRoute.Catalog}/page_${String(pageNumber)}`}
                  onClick={() => setCurrentPage(pageNumber)}
                >{pageNumber}
                </Link>
              </li>
            ))
        }
        {currentPage < pagesCount &&
          <li className="pagination__item">
            <Link className="pagination__link pagination__link--text"
              to={`${AppRoute.Catalog}/page_${String(currentPage + PAGE_STEP)}`}
              onClick={() => setCurrentPage(currentPage + PAGE_STEP)}
            >Далее
            </Link>
          </li>}
      </ul>
    </div>
  );
}

export default Pagination;
