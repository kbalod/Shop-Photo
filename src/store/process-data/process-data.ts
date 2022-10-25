import { createSlice } from '@reduxjs/toolkit';
import { ProcessData } from '../../types/state';
import { NameSpace } from '../../const';

const initialState: ProcessData = {
  currentPage: 1,
};

export const processData = createSlice({
  name: NameSpace.Process,
  initialState,
  reducers: {
    setCurrentPage: (state,action) => {
      state.currentPage = action.payload;
    }
  }});

export const {setCurrentPage} = processData.actions;

