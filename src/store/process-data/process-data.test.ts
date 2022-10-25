import { ProcessData } from '../../types/state';
import { processData, setCurrentPage } from './process-data';


const state: ProcessData = {
  currentPage:1,
};

describe('Reducer: process', () => {

  it('without additional parameters should return initial state',() => {
    expect(processData.reducer(undefined, {type: 'UNKNOWN_ACTION'}))
      .toEqual(state);
  });
  it('should set current page', () => {
    expect(processData.reducer(state, setCurrentPage(2)))
      .toEqual({...state, currentPage: 2});

    expect(processData.reducer(state, setCurrentPage(5)))
      .toEqual({...state, currentPage: 5});
  });
});

