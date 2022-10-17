import { NameSpace } from './../../const';
import { Review, Camera } from './../../types/data';
import { State } from './../../types/state';

const getReview = (state: State): Review[] | null => state[NameSpace.Camera].review;
const getSimilar = (state: State): Camera[] | null => state[NameSpace.Camera].similar;
const getProduct = (state: State): Camera | null => state[NameSpace.Camera].camera;

export {getReview, getSimilar, getProduct};
