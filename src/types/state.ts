import { Camera, Review } from './data';
import {store} from '../store/index.js';

export type CamerasData = {
    camera: Camera[];
    isDataLoaded: boolean;
  };

export type CameraData = {
    camera: Camera | null;
    review: Review[] | null;
    similar: Camera[] | null;
  };

export type ErrorsData = {
    authError: boolean,
    offerDataError: boolean,
    offerCommentsError: boolean,
    offerNearbyError: boolean,
    newCommentError: boolean
  };

export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
