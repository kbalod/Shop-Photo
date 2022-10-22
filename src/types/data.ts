export type Promo =
    {
    id: number,
  name: string,
  previewImg: string,
  previewImg2x: string,
  previewImgWebp: string,
  previewImgWebp2x: string,
    }

export type Camera =
    {
        id: number,
        name: string,
        vendorCode: string,
        type: string,
        category: string,
        description: string,
        level: string,
        rating: number,
        price: number,
        previewImg: string,
        previewImg2x: string,
        previewImgWebp: string,
        previewImgWebp2x: string,
        reviewCount: number,
    }

export type Review =
    {
    id :string,
    userName: string,
    advantage: string,
    disadvantage: string,
    review: string,
    rating: number,
    createAt: string,
    cameraId: number,
    };

export type PostReview =
    {
  cameraId: number,
  userName: string,
  advantage: string,
  disadvantage: string,
  review: string,
  rating: number,
    }

export type CamerasResponse = {
    camera: Camera[],
    totalCameras: number,
};
