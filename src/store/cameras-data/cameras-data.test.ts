import { camerasData } from './cameras-data';
import { fetchCamerasAction, fetchPromoProductAction } from './../action';
import { CamerasData } from './../../types/state';
import { fakeCamera, fakePromo } from './../../mock/mock';

const productsFake = [fakeCamera(),fakeCamera(),fakeCamera(),fakeCamera()];
const promoFake = fakePromo();

describe('Reducer: offer', () => {
  let state: CamerasData;

  beforeEach(() => {
    state = {
      camera: [],
      isDataLoaded: false,
      promo: null,
      camerasTotalCount: 0,
    };

  });
  it('without additional parameters should return initial state',() => {
    expect(camerasData.reducer(undefined, {type: 'UNKNOWN_ACTION'}))
      .toEqual(state);
  });
  it('should get products value', ()=> {
    expect(camerasData.reducer(state,{type: fetchCamerasAction.fulfilled.type, payload: {
      camera: productsFake,
      totalCameras: 4,
    }}))
      .toEqual({...state, camera: productsFake,isDataLoaded:true,camerasTotalCount: 4});
  });
  it('should get promo value', ()=> {
    expect(camerasData.reducer(state,{type: fetchPromoProductAction.fulfilled.type, payload: promoFake}))
      .toEqual({...state, promo: promoFake});
  });
});
