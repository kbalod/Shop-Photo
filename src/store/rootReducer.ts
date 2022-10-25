import { cameraData } from './camera-data/camera-data';
import { NameSpace } from './../const';
import { camerasData } from './cameras-data/cameras-data';
import { combineReducers } from '@reduxjs/toolkit';
import { errorsData } from './errors-data/errors-data';
import { processData } from './process-data/process-data';


export const rootReducer = combineReducers ({
  [NameSpace.Cameras]: camerasData.reducer,
  [NameSpace.Camera]: cameraData.reducer,
  [NameSpace.Errors]: errorsData.reducer,
  [NameSpace.Process]: processData.reducer,
});

export type RootState = ReturnType<typeof rootReducer>;
