import { City, Offer } from '../types/offer';

export const CITY: City = {
  title: 'Амстердам',
  lat: 52.370216,
  lng: 4.895168,
  zoom: 10,
};

export const offers: Offer[] = [
  {
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.37454,
        longitude: 4.897976,
        zoom: 13
      }
    },
    id: 1,
    image: ['img/room.jpg', 'img/apartment-01.jpg', 'img/apartment-02.jpg', 'img/apartment-03.jpg', 'img/studio-01.jpg', 'img/apartment-01.jpg'],
    premium: true,
    bookmark: false,
    name: 'Beautiful & luxurious apartment at great location',
    type: 'Apartment',
    price: 120,
    rating: 4.8,
    bedrooms: 3,
    guests: 4,
    lat: 52.3909553943508,
    lng: 4.85309666406198,
    options: ['Wi-Fi', 'Washing machine', 'Towels', 'Heating', 'Coffee machine', 'Baby seat', 'Kitchen', 'Dishwasher', 'Cabel TV', 'Fridge'],
    host: {
      image: 'img/avatar-angelina.jpg',
      name: 'Angelina',
      status: 'Pro',
    },
    description: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.The building is green and from 18th century. An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.',
    reviews: [
      {
        avatar: 'img/avatar-max.jpg',
        name: 'Max',
        text: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.The building is green and from 18th century.',
        date: '2019-04-24',
        rating: 4,
      }
    ],
  },
  {
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.37454,
        longitude: 4.897976,
        zoom: 13
      }
    },
    id: 2,
    image: ['img/room.jpg', 'img/apartment-01.jpg', 'img/apartment-02.jpg', 'img/apartment-03.jpg', 'img/apartment-01.jpg'],
    premium: false,
    bookmark: true,
    name: 'Wood and stone place',
    type: 'Private room',
    price: 80,
    rating: 4,
    bedrooms: 3,
    guests: 4,
    lat: 52.369553943508,
    lng: 4.85309666406198,
    options: ['Wi-Fi', 'Heating', 'Coffee machine', 'Kitchen', 'Dishwasher', 'Cabel TV', 'Fridge'],
    host: {
      image: 'img/avatar-angelina.jpg',
      name: 'Angelina',
      status: 'Pro',
    },
    description: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.The building is green and from 18th century. An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.',
    reviews: [
      {
        avatar: 'img/avatar-max.jpg',
        name: 'Max',
        text: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.The building is green and from 18th century.',
        date: '2019-04-24',
        rating: 4,
      }
    ],
  },
  {
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.37454,
        longitude: 4.897976,
        zoom: 13
      }
    },
    id: 3,
    image: ['img/apartment-02.jpg', 'img/apartment-03.jpg', 'img/apartment-01.jpg'],
    premium: false,
    bookmark: false,
    name: 'Canal View Prinsengracht',
    type: 'Apartment',
    price: 132,
    rating: 4,
    bedrooms: 3,
    guests: 4,
    lat: 52.3909553943508,
    lng: 4.929309666406198,
    options: ['Wi-Fi', 'Heating', 'Coffee machine', 'Kitchen', 'Dishwasher', 'Cabel TV', 'Fridge'],
    host: {
      image: 'img/avatar-angelina.jpg',
      name: 'Angelina',
      status: 'Pro',
    },
    description: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.The building is green and from 18th century. An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.',
    reviews: [
      {
        avatar: 'img/avatar-max.jpg',
        name: 'Max',
        text: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.The building is green and from 18th century.',
        date: '2019-04-24',
        rating: 4,
      }
    ],
  },
  {
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.37454,
        longitude: 4.897976,
        zoom: 13
      }
    },
    id: 4,
    image: ['img/apartment-03.jpg', 'img/apartment-01.jpg'],
    premium: false,
    bookmark: false,
    name: 'Nice, cozy, warm big bed apartment',
    type: 'Apartment',
    price: 125,
    rating: 4,
    bedrooms: 2,
    guests: 2,
    lat: 52.3809553943508,
    lng: 4.939309666406198,
    options: ['Wi-Fi', 'Coffee machine', 'Kitchen', 'Dishwasher', 'Cabel TV', 'Fridge'],
    host: {
      image: 'img/avatar-angelina.jpg',
      name: 'Helen',
      status: 'Pro',
    },
    description: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.The building is green and from 18th century. An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.',
    reviews: [
      {
        avatar: 'img/avatar-max.jpg',
        name: 'Max',
        text: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.The building is green and from 18th century.',
        date: '2019-04-24',
        rating: 4,
      }
    ],
  },
  {
    city: {
      name: 'Paris',
      location: {
        latitude: 52.3809553943508,
        longitude: 4.939309666406198,
        zoom: 13
      }
    },
    id: 5,
    image: [
      'https://10.react.pages.academy/static/hotel/3.jpg',
      'https://10.react.pages.academy/static/hotel/2.jpg',
      'https://10.react.pages.academy/static/hotel/15.jpg',
      'https://10.react.pages.academy/static/hotel/20.jpg',
      'https://10.react.pages.academy/static/hotel/9.jpg',
      'https://10.react.pages.academy/static/hotel/10.jpg',
      'https://10.react.pages.academy/static/hotel/13.jpg',
      'https://10.react.pages.academy/static/hotel/18.jpg',
      'https://10.react.pages.academy/static/hotel/7.jpg',
      'https://10.react.pages.academy/static/hotel/8.jpg',
      'https://10.react.pages.academy/static/hotel/16.jpg',
      'https://10.react.pages.academy/static/hotel/6.jpg',
      'https://10.react.pages.academy/static/hotel/11.jpg',
      'https://10.react.pages.academy/static/hotel/4.jpg'
    ],
    premium: false,
    bookmark: false,
    name: 'Nice, cozy, warm big bed apartment',
    type: 'house',
    price: 654,
    rating: 3.3,
    bedrooms: 2,
    guests: 3,
    lat: 52.3809553943508,
    lng: 4.939309666406198,
    options: ['Breakfast', 'Laptop friendly workspace'],
    host: {
      image: 'img/avatar-angelina.jpg',
      name: 'Angelina',
      status: 'Pro',
    },
    description: 'Relax, rejuvenate and unplug in this ultimate rustic getaway experience in the country. In our beautiful screened Pondhouse, you can gaze at the stars and listen to the sounds of nature from your cozy warm bed.',
    reviews: [
      {
        avatar: 'img/avatar-max.jpg',
        name: 'Max',
        text: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.The building is green and from 18th century.',
        date: '2019-04-24',
        rating: 4,
      }
    ],
  },
];
