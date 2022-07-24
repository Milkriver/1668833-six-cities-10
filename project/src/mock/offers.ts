import { Offers } from '../types/offer';

export const offers:Offers = [
  {
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
];
