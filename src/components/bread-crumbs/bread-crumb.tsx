import { Link } from 'react-router-dom';

type Props = {
    product:string,
}

function BreadCrumb({product}: Props) {
  return (
    <div className="breadcrumbs" data-testid={'breadcrumbs'}>
      <div className="container">
        <ul className="breadcrumbs__list">
          <li className="breadcrumbs__item">
            <Link className="breadcrumbs__link" to={'/'}>Главная
              <svg width="5" height="8" aria-hidden="true">
                <use xlinkHref="#icon-arrow-mini"></use>
              </svg>
            </Link>
          </li>
          <li className="breadcrumbs__item">
            <Link className="breadcrumbs__link" to={'/'}>Каталог
              <svg width="5" height="8" aria-hidden="true">
                <use xlinkHref="#icon-arrow-mini"></use>
              </svg>
            </Link>
          </li>
          <li className="breadcrumbs__item">
            <span className="breadcrumbs__link breadcrumbs__link--active">{product}</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default BreadCrumb;
