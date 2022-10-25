import { Camera, Review, Promo } from './data';
import {store} from '../store/store.js';

export type CamerasData = {
    camera: Camera[];
    isDataLoaded: boolean;
    promo: Promo | null;
    camerasTotalCount: number;
  };

export type CameraData = {
    camera: Camera | null;
    review: Review[] | null;
    similar: Camera[] | null;
  };

export type ErrorsData = {
    productsDataError: boolean,
    productDataError: boolean,
    productCommentsError: boolean,
    productSimilarError: boolean,
    newCommentError: boolean
  };

export type ProcessData = {
  currentPage: number,
}
export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
