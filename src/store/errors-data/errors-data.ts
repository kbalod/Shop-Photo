import { fetchSimilarAction, fetchCameraAction, fetchReviewsAction, postReviewAction, fetchCamerasAction } from '../action';
import { createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../const';
import { ErrorsData } from '../../types/state';

const initialState: ErrorsData = {
  productsDataError: false,
  productDataError: false,
  productCommentsError: false,
  productSimilarError: false,
  newCommentError: false,
};

export const errorsData = createSlice({
  name: NameSpace.Errors,
  initialState,
  reducers: {
  },
  extraReducers(builder) {
    builder
      .addCase(fetchCamerasAction.rejected, (state) => {
        state.productsDataError = true;
      })
      .addCase(fetchCameraAction.rejected, (state) => {
        state.productDataError = true;
      })
      .addCase(fetchReviewsAction.rejected, (state) => {
        state.productCommentsError = true;
      })
      .addCase(fetchSimilarAction.rejected, (state) => {
        state.productSimilarError = true;
      })
      .addCase(postReviewAction.rejected, (state) => {
        state.newCommentError = true;
      });
  }
});
