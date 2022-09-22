import { Camera } from './../../types/data';
import { NameSpace } from './../../const';
import { State } from './../../types/state';

const getDataLoadedStatus = (state: State): boolean => state[NameSpace.Cameras].isDataLoaded;
const getOffers = (state: State): Camera[] => state[NameSpace.Cameras].camera;

export {getDataLoadedStatus,getOffers};
