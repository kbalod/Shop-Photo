import { NameSpace } from '../../const';
import { State } from '../../types/state';

const getProductCommentsError = (state: State): boolean => state[NameSpace.Errors].productCommentsError;
const getProductsDataError = (state: State): boolean => state[NameSpace.Errors].productsDataError;
const getProductDataError = (state: State): boolean => state[NameSpace.Errors].productDataError;
const getProductNearbyError = (state: State): boolean => state[NameSpace.Errors].productSimilarError;
const getNewCommentError = (state: State): boolean => state[NameSpace.Errors].newCommentError;

export {getProductCommentsError, getProductDataError, getProductNearbyError,getNewCommentError,getProductsDataError};
