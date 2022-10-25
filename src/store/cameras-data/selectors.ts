import { Camera, Promo } from './../../types/data';
import { NameSpace } from './../../const';
import { State } from './../../types/state';

const getDataLoadedStatus = (state: State): boolean => state[NameSpace.Cameras].isDataLoaded;
const getProducts = (state: State): Camera[] => state[NameSpace.Cameras].camera;
const getCamerasTotalCount = (state: State): number => state[NameSpace.Cameras].camerasTotalCount;
const getPromoProduct = (state: State): Promo | null => state[NameSpace.Cameras].promo;


export {getDataLoadedStatus,getProducts,getPromoProduct,getCamerasTotalCount};
