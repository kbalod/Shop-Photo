import { fetchCamerasAction } from './../action';
import { NameSpace } from './../../const';
import { CamerasData } from './../../types/state';
import { createSlice } from '@reduxjs/toolkit';


const initialState: CamerasData = {
  camera: [],
  isDataLoaded: false,
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
      });
  }
});
