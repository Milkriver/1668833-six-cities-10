import { Offer } from '../types/offer';

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
    images: ['img/room.jpg', 'img/apartment-01.jpg', 'img/apartment-02.jpg', 'img/apartment-03.jpg', 'img/studio-01.jpg', 'img/apartment-01.jpg'],
    isPremium: true,
    isFavorite: false,
    title: 'Beautiful & luxurious apartment at great location',
    type: 'Apartment',
    price: 120,
    rating: 4.8,
    bedrooms: 3,
    maxAdults: 4,
    location: {
      latitude: 52.3909553943508,
      longitude: 4.85309666406198,
      zoom: 16
    },
    previewImage: 'https://10.react.pages.academy/static/hotel/18.jpg',
    goods: ['Wi-Fi', 'Washing machine', 'Towels', 'Heating', 'Coffee machine', 'Baby seat', 'Kitchen', 'Dishwasher', 'Cabel TV', 'Fridge'],
    host: {
      avatarUrl: 'img/avatar-angelina.jpg',
      name: 'Angelina',
      isPro: 'Pro',
      id: 1,
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
    images: ['img/room.jpg', 'img/apartment-01.jpg', 'img/apartment-02.jpg', 'img/apartment-03.jpg', 'img/apartment-01.jpg'],
    isPremium: false,
    isFavorite: true,
    title: 'Wood and stone place',
    type: 'Private room',
    price: 80,
    rating: 4,
    bedrooms: 3,
    maxAdults: 4,
    location: {
      'latitude': 52.369553943508,
      'longitude': 4.85309666406198,
      'zoom': 16
    },
    previewImage: 'https://10.react.pages.academy/static/hotel/18.jpg',
    goods: ['Wi-Fi', 'Heating', 'Coffee machine', 'Kitchen', 'Dishwasher', 'Cabel TV', 'Fridge'],
    host: {
      avatarUrl: 'img/avatar-angelina.jpg',
      name: 'Angelina',
      isPro: 'Pro',
      id: 1,
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
    images: ['img/apartment-02.jpg', 'img/apartment-03.jpg', 'img/apartment-01.jpg'],
    isPremium: false,
    isFavorite: false,
    title: 'Canal View Prinsengracht',
    type: 'Apartment',
    price: 132,
    rating: 4,
    bedrooms: 3,
    maxAdults: 4,
    location: {
      'latitude': 52.3909553943508,
      'longitude': 4.929309666406198,
      'zoom': 16
    },
    previewImage: 'https://10.react.pages.academy/static/hotel/18.jpg',
    goods: ['Wi-Fi', 'Heating', 'Coffee machine', 'Kitchen', 'Dishwasher', 'Cabel TV', 'Fridge'],
    host: {
      avatarUrl: 'img/avatar-angelina.jpg',
      name: 'Angelina',
      isPro: 'Pro',
      id: 1,
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
    images: ['img/apartment-03.jpg', 'img/apartment-01.jpg'],
    isPremium: false,
    isFavorite: false,
    title: 'Nice, cozy, warm big bed apartment',
    type: 'Apartment',
    price: 125,
    rating: 4,
    bedrooms: 2,
    maxAdults: 2,
    location: {
      'latitude': 52.3809553943508,
      'longitude': 4.939309666406198,
      'zoom': 16
    },
    previewImage: 'https://10.react.pages.academy/static/hotel/18.jpg',
    goods: ['Wi-Fi', 'Coffee machine', 'Kitchen', 'Dishwasher', 'Cabel TV', 'Fridge'],
    host: {
      avatarUrl: 'img/avatar-angelina.jpg',
      name: 'Helen',
      isPro: 'Pro',
      id: 1,
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
        latitude: 48.8534,
        longitude: 2.3488,
        zoom: 13
      }
    },
    id: 5,
    images: [
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
    isPremium: false,
    isFavorite: false,
    title: 'Nice, cozy, warm big bed apartment',
    type: 'house',
    price: 654,
    rating: 3.3,
    bedrooms: 2,
    maxAdults: 3,
    location: {
      'latitude': 48.8634,
      'longitude': 2.3888,
      'zoom': 16
    },
    previewImage: 'https://10.react.pages.academy/static/hotel/18.jpg',
    goods: ['Breakfast', 'Laptop friendly workspace'],
    host: {
      avatarUrl: 'img/avatar-angelina.jpg',
      name: 'Angelina',
      isPro: 'Pro',
      id: 1,
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
