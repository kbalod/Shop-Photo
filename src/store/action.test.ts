import { fakeCamera, fakePromo, fakeReview, fakePostReview } from './../mock/mock';
import { fetchCamerasAction, fetchSimilarAction, fetchCameraAction, fetchPromoProductAction, fetchReviewsAction, postReviewAction } from './action';
import { APIRoute } from './../const';
import MockAdapter from 'axios-mock-adapter';
import { configureMockStore } from '@jedmao/redux-mock-store';
import thunk from 'redux-thunk';
import { Action,ThunkDispatch } from '@reduxjs/toolkit';
import { State } from '../types/state';
import { createAPI } from '../service/service';

describe('Async actions', () => {
  const api = createAPI();
  const mockAPI = new MockAdapter(api);
  const middlewares = [thunk.withExtraArgument(api)];

  const mockStore = configureMockStore<
        State,
        Action,
        ThunkDispatch<State, typeof api, Action>
      >(middlewares);
  describe('GetCameras', () => {
    it('when GET /cameras and server response "ok" should set actions types to pending and fulfilled', async () => {
      const camerasArray = [fakeCamera()];
      const startIndex = '1';
      const FAKE_TOTAL_COUNT = 40;
      mockAPI.onGet(`${APIRoute.Cameras}?_start=0&_limit=9`).reply(200,{camera:camerasArray, totalCameras: FAKE_TOTAL_COUNT},{
        'x-total-count': FAKE_TOTAL_COUNT,
      });
      const store = mockStore();

      await store.dispatch(fetchCamerasAction(startIndex));

      const actions = store.getActions().map(({type}) => type);

      expect(actions).toEqual([
        fetchCamerasAction.pending.type,
        fetchCamerasAction.fulfilled.type
      ]);
    });
  });
  it('should dispatch fetchSimilarCamerasAction when GET /cameras/id/similar', async () => {
    const fakeId = '1';
    const cameras = [fakeCamera()];
    mockAPI
      .onGet(`${APIRoute.Cameras}/${fakeId}${APIRoute.Similar}`)
      .reply(200, cameras);

    const store = mockStore();

    await store.dispatch(fetchSimilarAction(fakeId));

    const actions = store.getActions().map(({type}) => type);

    expect(actions).toEqual([
      fetchSimilarAction.pending.type,
      fetchSimilarAction.fulfilled.type
    ]);
  });

  it('should dispatch fetchCameraAction when GET /cameras/id', async () => {
    const fakeId = '1';
    const cameras = [fakeCamera()];
    mockAPI
      .onGet(`${APIRoute.Cameras}/${fakeId}`)
      .reply(200, cameras);

    const store = mockStore();

    await store.dispatch(fetchCameraAction(fakeId));

    const actions = store.getActions().map(({type}) => type);

    expect(actions).toEqual([
      fetchCameraAction.pending.type,
      fetchCameraAction.fulfilled.type
    ]);
  });
  it('should dispatch fetchPromo when GET /promo', async () => {
    const promo = fakePromo();
    mockAPI
      .onGet(APIRoute.Promo)
      .reply(200, promo);

    const store = mockStore();

    await store.dispatch(fetchPromoProductAction());

    const actions = store.getActions().map(({type}) => type);

    expect(actions).toEqual([
      fetchPromoProductAction.pending.type,
      fetchPromoProductAction.fulfilled.type
    ]);
  });
  it('should dispatch fetchReview when GET /reviews', async () => {
    const fakeId = '1';
    const review = fakeReview();
    mockAPI
      .onGet(APIRoute.Reviews)
      .reply(200, review);

    const store = mockStore();

    await store.dispatch(fetchReviewsAction(fakeId));

    const actions = store.getActions().map(({type}) => type);

    expect(actions).toEqual([
      fetchReviewsAction.pending.type,
      fetchReviewsAction.rejected.type
    ]);
  });
  it('should send new review', async () => {

    const reviewPost = fakePostReview();
    mockAPI
      .onPost(APIRoute.Reviews)
      .reply(200, []);

    const store = mockStore();

    await store.dispatch(postReviewAction(reviewPost));

    const actions = store.getActions().map(({type}) => type);

    expect(actions).toContain(postReviewAction.fulfilled.type);
  });
});
