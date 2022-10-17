
import { fetchCameraAction, fetchCamerasAction, fetchReviewsAction, fetchSimilarAction, postReviewAction } from '../action';
import { errorsData } from './errors-data';

describe('Reducer: errors', () => {
  let state;
  beforeEach(() => {
    state = {
      productsDataError: false,
      productDataError: false,
      productCommentsError: false,
      productSimilarError: false,
      newCommentError: false
    };
  });
  it('without additional parameters should return initial state',() => {
    expect(errorsData.reducer(undefined, {type: 'UNKNOWN_ACTION'}))
      .toEqual(state);
  });
  it('should change productDataError to true', () => {
    expect(errorsData.reducer(state, {type: fetchCameraAction.rejected.type}))
      .toEqual({...state, productDataError: true});
  });
  it('should change productsDataError to true', () => {
    expect(errorsData.reducer(state, {type: fetchCamerasAction.rejected.type}))
      .toEqual({...state, productsDataError: true});
  });
  it('should change productCommentsError to true', () => {
    expect(errorsData.reducer(state, {type: fetchReviewsAction.rejected.type}))
      .toEqual({...state, productCommentsError: true});
  });
  it('should change productSimilarError to true', () => {
    expect(errorsData.reducer(state, {type: fetchSimilarAction.rejected.type}))
      .toEqual({...state, productSimilarError: true});
  });
  it('should change newCommentError to true', () => {
    expect(errorsData.reducer(state, {type: postReviewAction.rejected.type}))
      .toEqual({...state, newCommentError: true});
  });
});
