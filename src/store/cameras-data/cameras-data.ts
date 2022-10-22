import { fetchCamerasAction, fetchPromoProductAction } from './../action';
import { NameSpace } from './../../const';
import { CamerasData } from './../../types/state';
import { createSlice } from '@reduxjs/toolkit';


const initialState: CamerasData = {
  camera: [],
  camerasTotalCount: 0,
  currentPage : 1,
  isDataLoaded: false,
  promo: null,
};

export const camerasData = createSlice({
  name: NameSpace.Cameras,
  initialState,
  reducers: {
    setCurrentPageStore : (state,action) => {
      state.currentPage = action.payload;
    }
  },
  extraReducers(builder) {
    builder
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

export const {setCurrentPageStore} = camerasData.actions;
