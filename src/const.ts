export enum APIRoute {
    Main = '/',
    Cameras = '/cameras',
    Reviews = '/reviews',
    Similar = '/similar',
    Promo = '/promo'
  }

export const AppRoute = {
  Main : '/',
  Camera : '/offer',
  CatalogPage : '/catalog/:page',
  Catalog : '/catalog',
} as const;

export enum NameSpace {
    Cameras = 'CAMERAS',
    Camera = 'CAMERA',
    Errors = 'ERRORS',
  }

export enum Star{
    two = 2,
    three = 3,
    four = 4,
    five = 5.
}

export const PRODUCTS_PER_VIEW = 9;
export const DEFAULT_PAGE = 1;
