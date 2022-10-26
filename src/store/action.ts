import { Promo, CamerasResponse } from './../types/data';
import {AxiosInstance} from 'axios';
import {createAsyncThunk} from '@reduxjs/toolkit';
import {AppDispatch, State} from '../types/state';
import { Camera, PostReview, Review } from '../types/data';
import { APIRoute } from '../const';


export const fetchCamerasAction = createAsyncThunk<CamerasResponse, string, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'data/fetchCameras',
  async (currentPage : string, {extra: api}) => {
    const startIndex = (Number(currentPage) * 9) - 9;
    const response = await api.get<Camera[]>(`${APIRoute.Cameras}?_start=${String(startIndex)}&_limit=9`);
    const data = response.data;
    const camerasTotalCount = response.headers['x-total-count'];
    return {
      camera: data,
      totalCameras: camerasTotalCount,
    };
  },
);

export const fetchCameraAction = createAsyncThunk<Camera, string, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'data/camera',
  async (id, {extra: api}) => {
    const {data} = await api.get<Camera>(`${APIRoute.Cameras}/${id}`);
    return data;
  },
);

export const fetchReviewsAction = createAsyncThunk<Review[], string, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'data/fetchReviews',
  async (id, {extra: api}) => {
    const {data} = await api.get<Review[]>(`${APIRoute.Cameras}/${id}${APIRoute.Reviews}`);
    return data;
  },
);

export const postReviewAction = createAsyncThunk<Review[],PostReview, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'data/postReview',
  async (review, {extra: api}) => {
    const {data} = await api.post(APIRoute.Reviews, review);
    return data;
  },
);

export const fetchSimilarAction = createAsyncThunk<Camera[], string, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'data/fetchSimilar',
  async (id, {extra: api}) => {
    const {data} = await api.get<Camera[]>(`${APIRoute.Cameras}/${id}${APIRoute.Similar}`);
    return data;
  }
);

export const fetchPromoProductAction = createAsyncThunk<Promo, undefined, {extra: AxiosInstance}>(
  'data/fetchPromoProduct',
  async (_arg, {extra: api}) => {
    const {data} = await api.get<Promo>(APIRoute.Promo);
    console.log(data);
    return data;
  }
);
