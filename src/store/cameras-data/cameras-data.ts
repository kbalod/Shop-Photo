import { fetchCamerasAction, fetchPromoProductAction } from './../action';
import { NameSpace } from './../../const';
import { CamerasData } from './../../types/state';
import { createSlice } from '@reduxjs/toolkit';


const initialState: CamerasData = {
  camera: [],
  isDataLoaded: false,
  promo: null,
};

export const camerasData = createSlice({
  name: NameSpace.Cameras,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchCamerasAction.fulfilled, (state, action) => {
        state.camera = action.payload;
        state.isDataLoaded = true;
      })
      .addCase(fetchPromoProductAction.fulfilled, (state, action) => {
        state.promo = action.payload;
      });
  },
});
