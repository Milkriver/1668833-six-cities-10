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
  name: string,
  type: string,
  premium: boolean,
  image: string[],
  price: number,
  bookmark: boolean,
  rating: number,
  lat: number,
  lng: number,
  bedrooms: number,
  guests: number,
  options: string[],
  host: {
    image: string,
    name: string,
    status: string,
  },
  description: string,
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
