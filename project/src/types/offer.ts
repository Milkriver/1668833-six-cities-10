export type Offer = {
  city: {
    name: string,
    location: {
      latitude: number,
      longitude: number,
      zoom: number
    }
  },
  previewImage: string,
  images: string[],
  title: string,
  isFavorite: boolean,
  isPremium: boolean,
  rating: number,
  type: string,
  bedrooms: number,
  maxAdults: number,
  price: number,
  goods: string[],
  host: {
    id: number,
    name: string,
    isPro: true,
    avatarUrl: string
  },
  description: string,
  location: {
    latitude: number,
    longitude: number,
    zoom: number,
  },
  id: number
}

export type City = {
  name: string,
  location: {
    latitude: number,
    longitude: number,
    zoom: number
  },
};

export type Review = {
  comment: string
  date: string
  id: number
  rating: number
  user: {
    avatarUrl: string
    id: number
    isPro: boolean
    name: string
  }
};

export type ReviewRequest = {
  offerId: number,
  review: {
    comment: string
    rating: number
  }
};

export type FavoriteOfferData = {
  'offerId': string,
  'FavoriteStatus': number,
}
