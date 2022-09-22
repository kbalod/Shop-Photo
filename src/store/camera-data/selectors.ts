import { NameSpace } from './../../const';
import { Review, Camera } from './../../types/data';
import { State } from './../../types/state';

const getReview = (state: State): Review[] | null => state[NameSpace.Camera].review;
const getNearby = (state: State): Camera[] | null => state[NameSpace.Camera].similar;
const getOffer = (state: State): Camera | null => state[NameSpace.Camera].camera;

export {getReview, getNearby, getOffer};
