
type Props = {
    product:string,
}

function BreadCrumb({product}: Props) {
  return (
    <div className="breadcrumbs" data-testid={'breadcrumbs'}>
      <div className="container">
        <ul className="breadcrumbs__list">
          <li className="breadcrumbs__item">
            <a className="breadcrumbs__link" href="index.html">Главная
              <svg width="5" height="8" aria-hidden="true">
                <use xlinkHref="#icon-arrow-mini"></use>
              </svg>
            </a>
          </li>
          <li className="breadcrumbs__item">
            <a className="breadcrumbs__link" href="catalog.html">Каталог
              <svg width="5" height="8" aria-hidden="true">
                <use xlinkHref="#icon-arrow-mini"></use>
              </svg>
            </a>
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
