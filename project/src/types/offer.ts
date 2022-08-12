export type Offer = {
  city: {
    name: string,
    location: {
      latitude: number,
      longitude: number,
      zoom: number
    }
  },
  id: number,
  title: string,
  type: string,
  isPremium: boolean,
  images: string[],
  price: number,
  isFavorite: boolean,
  rating: number,
  location: {
    latitude: number,
    longitude: number,
    zoom: number}
  bedrooms: number,
  maxAdults: number,
  goods: string[],
  host: {
    id: number,
    name: string,
    isPro: string,
    avatarUrl: string,
  },
  description: string,
  previewImage: string,
  reviews: [
    {
      avatar: string,
      name: string,
      text: string,
      date: string,
      rating: number,
    }
  ],
};

export type City = {
  name: string,
  location: {
    latitude: number,
    longitude: number,
    zoom: number
  },
};

export type Review = {
  avatar: string,
  name: string,
  text: string,
  date: string,
  rating: number,
}
