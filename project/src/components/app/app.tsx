import { Route, Routes } from 'react-router-dom';
import { AppRoute, isCheckedAuth } from '../../const';
import { useAppSelector } from '../../hooks';
import Favorites from '../../pages/favorites/favorites';
import LoadingScreen from '../../pages/loading-screen/loading-screen';
import LoginPage from '../../pages/login-page/login-page';
import MainPage from '../../pages/main-page/main-page';
import NotFoundScreen from '../../pages/not-found-screen/not-found-screen';
import OfferPage from '../../pages/offer-page/offer-page';
import { selectLoadedDataStatus } from '../../store/offer-process/selectors';
import { selectAuthorizationStatus } from '../../store/user-process/selectors';
import PrivateRoute from '../private-route/private-route';

function App(): JSX.Element {
  const isDataLoaded = useAppSelector(selectLoadedDataStatus);
  const authorizationStatus = useAppSelector(selectAuthorizationStatus);

  if (isCheckedAuth(authorizationStatus) || isDataLoaded) {
    return (
      <LoadingScreen />
    );
  }

  return (
    <Routes>
      <Route
        path={AppRoute.Main}
        element={<MainPage />}
      />
      <Route
        path={AppRoute.Room}
        element={<OfferPage />}
      />
      <Route
        path={AppRoute.Favorites}
        element={
          <PrivateRoute
            authorizationStatus={authorizationStatus}
          >
            <Favorites />
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
  );
}

export default App;
