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
  images: [],
  title: string,
  isFavorite: boolean,
  isPremium: boolean,
  rating: number,
  type: string,
  bedrooms: number,
  maxAdults: number,
  price: number,
  goods: [],
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
  id: 1
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
  avatar: string,
  name: string,
  text: string,
  date: string,
  rating: number,
}
