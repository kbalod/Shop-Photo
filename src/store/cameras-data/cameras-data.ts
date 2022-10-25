import { fetchCamerasAction, fetchPromoProductAction } from './../action';
import { NameSpace } from './../../const';
import { CamerasData } from './../../types/state';
import { createSlice } from '@reduxjs/toolkit';


const initialState: CamerasData = {
  camera: [],
  camerasTotalCount: 0,
  isDataLoaded: false,
  promo: null,
};

export const camerasData = createSlice({
  name: NameSpace.Cameras,
  initialState,
  reducers: {
  },
  extraReducers(builder) {
    builder
      .addCase(fetchCamerasAction.pending, (state) => {
        state.isDataLoaded = false;
      })
      .addCase(fetchCamerasAction.fulfilled, (state, action) => {
        const {camera,totalCameras} = action.payload;
        state.camera = camera;
        if(!state.isDataLoaded){
          state.camerasTotalCount = totalCameras;
        }
        state.isDataLoaded = true;
      })
      .addCase(fetchPromoProductAction.fulfilled, (state, action) => {
        state.promo = action.payload;
      });
  },
});
