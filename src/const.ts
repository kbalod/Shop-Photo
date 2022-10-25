export enum APIRoute {
    Main = '/',
    Cameras = '/cameras',
    Reviews = '/reviews',
    Similar = '/similar',
    Promo = '/promo'
  }

export const AppRoute = {
  Main : '/',
  Camera : '/product/',
  Product: '/product/:id',
  CatalogPage : '/catalog/:page',
  Catalog : '/catalog',
  NotFound : '*',
} as const;

export enum NameSpace {
    Cameras = 'CAMERAS',
    Camera = 'CAMERA',
    Errors = 'ERRORS',
    Process = 'PROCESS'
  }

export enum Star{
    two = 2,
    three = 3,
    four = 4,
    five = 5.
}

export const StarForm = [
  'Отлично',
  'Хорошо',
  'Нормально',
  'Плохо',
  'Ужасно',
];
export const getTitle = (index: number) => StarForm.find((_item, idx) => index === (idx + 1));

export const DateData = {
  Locale: 'ru',
  ReviewFormat: 'DD MMMM',
  DateTimeFormat: 'YYYY-MM-DD',
} as const;

export const PRODUCTS_PER_VIEW = 9;
export const DEFAULT_PAGE = 1;
export const PRODUCT_STEP = 1;

export const DEFAULT_MAX_SIMILAR = 3;
export const SIMILAR_STEP = 1;
export const START_SIMILAR_INDEX = 0;

export const MIN_REVIEW_LENGTH = 1;
export const REVIEWS_STEP = 3;

export const CutPage = {
  form: 5,
  to: 6,
} as const;

