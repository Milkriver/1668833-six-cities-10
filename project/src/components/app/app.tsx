import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import browserHistory from '../../browser-history';
import { AppRoute, isCheckedAuth } from '../../const';
import { useAppSelector } from '../../hooks';
import Favorites from '../../pages/favorites/favorites';
import LoadingScreen from '../../pages/loading-screen/loading-screen';
import LoginPage from '../../pages/login-page/login-page';
import MainPage from '../../pages/main-page/main-page';
import NotFoundScreen from '../../pages/not-found-screen/not-found-screen';
import OfferPage from '../../pages/offer-page/offer-page';
import { Offer } from '../../types/offer';
import HistoryRouter from '../history-route/history-route';
import PrivateRoute from '../private-route/private-route';

type Props = {
  offers: Offer[];
}

function App({ offers }: Props): JSX.Element {
  const { authorizationStatus, isDataLoaded } = useAppSelector((state) => state);
  const [selectedOffer, setSelectedOffer] = useState<Offer | undefined>(
    undefined
  );
  if (isCheckedAuth(authorizationStatus) || isDataLoaded) {
    return (
      <LoadingScreen />
    );
  }

  const offerHoverHandler = (offerId: number | undefined) => {
    const currentOffer = offers.find((offer) => offer.id === offerId);
    setSelectedOffer(currentOffer);
  };
  return (
    <HistoryRouter history={browserHistory}>
      <Routes>
        <Route
          path={AppRoute.Main}
          element={<MainPage offerHoverHandler={offerHoverHandler} selectedOffer={selectedOffer} />}
        />
        <Route
          path={AppRoute.Room}
          element={<OfferPage offer={offers[0]} offerHoverHandler={offerHoverHandler} selectedOffer={selectedOffer} />}
        />
        <Route
          path={AppRoute.Favorites}
          element={
            <PrivateRoute
              authorizationStatus={authorizationStatus}
            >
              <Favorites offerHoverHandler={offerHoverHandler} />
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
    </HistoryRouter>
  );
}

export default App;
