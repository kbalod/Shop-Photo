import { fetchCameraAction, fetchReviewsAction, fetchSimilarAction, postReviewAction } from './../action';
import { cameraData } from './camera-data';
import { CameraData } from './../../types/state';
import { fakeCamera, fakeReview, fakePostReview } from './../../mock/mock';

const productFake = fakeCamera();
const reviewFake = fakeReview();
const similarFake = [fakeCamera(),fakeCamera(),fakeCamera()];
const postReviewFake = fakePostReview();
describe('Reducer: offer', () => {
  let state: CameraData;

  beforeEach(() => {
    state = {
      camera: null,
      review: [],
      similar: []
    };

  });
  it('without additional parameters should return initial state',() => {
    expect(cameraData.reducer(undefined, {type: 'UNKNOWN_ACTION'}))
      .toEqual(state);
  });
  it('should get product value', ()=> {
    expect(cameraData.reducer(state,{type: fetchCameraAction.fulfilled.type, payload: productFake}))
      .toEqual({...state, camera: productFake});
  });
  it('should get comments value', ()=> {
    expect(cameraData.reducer(state,{type: fetchReviewsAction.fulfilled.type, payload: reviewFake}))
      .toEqual({...state, review: reviewFake});
  });
  it('should get similar value', ()=> {
    expect(cameraData.reducer(state,{type: fetchSimilarAction.fulfilled.type, payload: similarFake}))
      .toEqual({...state, similar: similarFake});
  });
  it('should get new comments value', ()=> {
    expect(cameraData.reducer(state,{type: postReviewAction.fulfilled.type, payload: postReviewFake}))
      .toEqual({...state, review: postReviewFake});
  });
});
