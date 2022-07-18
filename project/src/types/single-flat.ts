export type SingleFlat = {
  id: number,
  name: string,
  type: string,
  premium: boolean,
  image: string,
  price: number,
  bookmark: boolean,
  rating: number,
};

export type SingleFlatPage = {
  id: number,
  name: string,
  type: string,
  premium: boolean,
  image: string[],
  price: number,
  bookmark: boolean,
  rating: number,
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
      date: Date,
      rating: number,
    }
  ],
};
