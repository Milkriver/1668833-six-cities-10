import { City } from './types/offer';

export enum AppRoute {
  Main = '/',
  Login = '/login',
  Favorites = '/favorites',
  Room = '/offer/:id',
  PageError = '*'
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export const isCheckedAuth = (authorizationStatus: AuthorizationStatus): boolean =>
  authorizationStatus === AuthorizationStatus.Unknown;

export enum APIRoute {
  Hotels = '/hotels',
  Hotel = '/hotels/:id',
  HotelsNearby = '/hotels/:id/nearby',
  Favorites = '/favorite',
  Comments = '/comments/:id',
  Comment = '/comments/:id',
  Login = '/login',
  Logout = '/logout',
}

export const URL_MARKER_DEFAULT = 'img/pin.svg';
export const URL_MARKER_CURRENT = 'img/pin-active.svg';

export const locations: Record<string, City> = {
  Amsterdam: {
    name: 'Amsterdam',
    location: {
      latitude: 52.37454,
      longitude: 4.897976,
      zoom: 13
    }
  },
  Paris: {
    name: 'Paris',
    location: {
      latitude: 48.8534,
      longitude: 2.3488,
      zoom: 13
    }
  },
  Cologne: {
    name: 'Cologne',
    location: {
      latitude: 45.5774872,
      longitude: 9.939068899999999,
      zoom: 13
    }
  },
  Brussels: {
    name: 'Brussels',
    location: {
      latitude: 50.8504,
      longitude: 4.34878,
      zoom: 13
    }
  },
  Hamburg: {
    name: 'Hamburg',
    location: {
      latitude: 53.5753,
      longitude: 10.0153,
      zoom: 13
    }
  },
  Dusseldorf: {
    name: 'Dusseldorf',
    location: {
      latitude: 51.2217,
      longitude: 6.77616,
      zoom: 13
    }
  },
};

export const sortOptionList = {
  popular: 'Popular',
  risingPrice: 'Price: low to high',
  decliningPrice: 'Price: high to low',
  topRating: 'Top rated first',
};
