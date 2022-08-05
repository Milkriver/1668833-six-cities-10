import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';
import Favorites from '../../pages/favorites/favorites';
import LoginPage from '../../pages/login-page/login-page';
import MainPage from '../../pages/main-page/main-page';
import NotFoundScreen from '../../pages/not-found-screen/not-found-screen';
import OfferPage from '../../pages/offer-page/offer-page';
import { Offer } from '../../types/offer';
import PrivateRoute from '../private-route/private-route';

type Props = {
  offers: Offer[];
}


function App({ offers }: Props): JSX.Element {
  const [selectedOffer, setSelectedOffer] = useState<Offer | undefined>(
    undefined
  );

  const offerHoverHandler = (offerId: number | undefined) => {
    const currentOffer = offers.find((offer) => offer.id === offerId);

    setSelectedOffer(currentOffer);
  };
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.Main}
          element={<MainPage offerHoverHandler={offerHoverHandler} selectedOffer={selectedOffer} />}
        />
        <Route
          path={AppRoute.Room}
          element={<OfferPage offers={offers} offer={offers[0]} offerHoverHandler={offerHoverHandler} selectedOffer={selectedOffer}/>}
        />
        <Route
          path={AppRoute.Favorites}
          element={
            <PrivateRoute
              authorizationStatus={AuthorizationStatus.NoAuth}
            >
              <Favorites offers={offers} offerHoverHandler={offerHoverHandler} />
            </PrivateRoute>
          }
        />
        < Route
          path={AppRoute.Login}
          element={<LoginPage />}
        />
        <Route
          path="*"
          element={<NotFoundScreen />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
