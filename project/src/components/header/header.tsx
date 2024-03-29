import { Link } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { logoutAction } from '../../store/api-actions';
import { selectFavoriteOffersNumber } from '../../store/offer-process/selectors';
import { selectAuthorizationStatus, selectUserEmail } from '../../store/user-process/selectors';
import Logo from '../logo/logo';

function Header(): JSX.Element {
  const dispatch = useAppDispatch();
  const userEmail = useAppSelector(selectUserEmail);
  const authorizationStatus = useAppSelector(selectAuthorizationStatus);
  const favoriteOffersNumber = useAppSelector(selectFavoriteOffersNumber);
  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Logo />
          </div>
          <nav className="header__nav">

            {
              (authorizationStatus === AuthorizationStatus.Auth)
                ?
                <ul className="header__nav-list">
                  <li className="header__nav-item user">
                    <Link to={AppRoute.Favorites} className="header__nav-link header__nav-link--profile">
                      <div className="header__avatar-wrapper user__avatar-wrapper">
                      </div>
                      <span className="header__user-name user__name">{(userEmail) ? userEmail : ''}</span>
                      <span className="header__favorite-count">{favoriteOffersNumber}</span>
                    </Link>
                  </li>
                  <li className="header__nav-item">
                    <Link
                      className="header__nav-link"
                      to="/"
                      onClick={(evt) => {
                        evt.preventDefault();
                        dispatch(logoutAction());
                      }}
                    >
                      <span className="header__signout">Sign out</span>
                    </Link>
                  </li>
                </ul>
                :
                <ul className="header__nav-list">
                  <li className="header__nav-item user">
                    <Link to={AppRoute.Login} className="header__nav-link header__nav-link--profile" >
                      <div className="header__avatar-wrapper user__avatar-wrapper">
                      </div>
                      <span className="header__login">Sign in</span>
                    </Link>
                  </li>
                </ul>
            }
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
