import { NameSpace } from '../../const';
import { State } from '../../types/state';

export const getCamerasPage = (state: State) : number => state[NameSpace.Process].currentPage;
