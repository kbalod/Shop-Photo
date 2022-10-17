import { Link } from 'react-router-dom';
import {ReactComponent as IconLogo} from '../../assets/img/sprite/icon-logo.svg';
import {ReactComponent as IconBasket} from '../../assets/img/sprite/icon-basket.svg';

function Header (): JSX.Element {
  return(
    <header className="header" id="header" data-testid={'header'}>
      <div className="container">
        <Link className="header__logo" to={'/'} aria-label="Переход на главную">
          <IconLogo/>
        </Link>
        <nav className="main-nav header__main-nav">
          <ul className="main-nav__list">
            <li className="main-nav__item">
              <Link className="main-nav__link" to={'/'}>Каталог</Link>
            </li>
            <li className="main-nav__item">
              <Link className="main-nav__link" to={'/'}>Гарантии</Link>
            </li>
            <li className="main-nav__item">
              <Link className="main-nav__link" to={'/'}>Доставка</Link>
            </li>
            <li className="main-nav__item">
              <Link className="main-nav__link" to={'/'}>О компании</Link>
            </li>
          </ul>
        </nav>
        <div className="form-search">
          <form>
            <label>
              <svg className="form-search__icon" width="16" height="16" aria-hidden="true">
                <use xlinkHref="#icon-lens"></use>
              </svg>
              <input className="form-search__input" type="text" autoComplete="off" placeholder="Поиск по сайту"/>
            </label>
            <ul className="form-search__select-list">
              <li className="form-search__select-item" tabIndex={0}>Cannonball Pro MX 8i</li>
              <li className="form-search__select-item" tabIndex={0}>Cannonball Pro MX 7i</li>
              <li className="form-search__select-item" tabIndex={0}>Cannonball Pro MX 6i</li>
              <li className="form-search__select-item" tabIndex={0}>Cannonball Pro MX 5i</li>
              <li className="form-search__select-item" tabIndex={0}>Cannonball Pro MX 4i</li>
            </ul>
          </form>
          <button className="form-search__reset" type="reset">
            <svg width="10" height="10" aria-hidden="true">
              <use xlinkHref="#icon-close"></use>
            </svg>
            <span className="visually-hidden">Сбросить поиск</span>
          </button>
        </div>
        <Link className="header__basket-link" to={'/'}>
          <IconBasket />
        </Link>
      </div>
    </header>
  );
}

export default Header;
