import { createAction } from '@reduxjs/toolkit';


export const changeLocationAction = createAction('offers/changeLocation', (city, offers) => ({
  payload: {
    city,
    offers
  }
}));
