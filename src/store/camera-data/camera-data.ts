import { CameraData } from './../../types/state';
import { fetchCameraAction, fetchSimilarAction, fetchReviewsAction, postReviewAction } from './../action';
import { createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../const';

const initialState: CameraData = {
  camera: null,
  review: [],
  similar: [],
};

export const cameraData = createSlice ({
  name: NameSpace.Camera,
  initialState,
  reducers: {
  },
  extraReducers(builder) {
    builder
      .addCase(fetchCameraAction.fulfilled, (state, action) => {
        state.camera = action.payload;
      })
      .addCase(fetchReviewsAction.fulfilled, (state, action) => {
        state.review = action.payload;
      })
      .addCase(fetchSimilarAction.fulfilled, (state, action) => {
        state.similar = action.payload;
      })
      .addCase(postReviewAction.fulfilled, (state, action) => {
        state.review = action.payload;
      });
  }
});
