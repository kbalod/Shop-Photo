import { Camera, PostReview, Promo, Review} from './../types/data';
import { random,image,commerce,datatype} from 'faker';

export const fakeCamera = () : Camera => ({
  id: datatype.number(),
  name: random.alpha(),
  vendorCode: random.alpha(),
  type: random.alpha(),
  category: random.alpha(),
  description: random.alpha(),
  level: random.alpha(),
  rating: Number(commerce.price(1,5,0)),
  price: Number(commerce.price(1000,10000,0)),
  previewImg: image.abstract(),
  previewImg2x: image.abstract(),
  previewImgWebp: image.abstract(),
  previewImgWebp2x: image.abstract(),
  reviewCount: Number(commerce.price(1,5,0)),
});

export const fakePromo = () : Promo => ({
  id: Number(random.alphaNumeric(1)),
  name: random.alpha(),
  previewImg: image.abstract(),
  previewImg2x: image.abstract(),
  previewImgWebp: image.abstract(),
  previewImgWebp2x: image.abstract(),
});

export const fakeReview = () : Review => ({
  id : random.alphaNumeric(1),
  userName: random.alpha(),
  advantage: random.alpha(),
  disadvantage: random.alpha(),
  review: random.alpha(),
  rating: Number(commerce.price(1,5,0)),
  createAt: datatype.datetime.toString(),
  cameraId: Number(commerce.price(1,5,0)),
});

export const fakePostReview = () : PostReview => ({
  cameraId: Number(random.alphaNumeric(1)),
  userName: random.alpha(),
  advantage: random.alpha(),
  disadvantage: random.alpha(),
  review: random.alpha(),
  rating: Number(commerce.price(1,5,0)),
});
