import { createAction } from '@reduxjs/toolkit';


export const changeCityAction = createAction('offers/changeCity', (city, offers) => ({
  payload: {
    city,
    offers
  }
}));
