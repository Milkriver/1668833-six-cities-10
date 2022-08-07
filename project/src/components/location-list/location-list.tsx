import { LOCATIONS } from '../../const';
import { changeCity } from '../../utils';
import { useAppDispatch } from '../../hooks';
import { changeCityAction } from '../../store/action';
import LocationItem from '../location-item/location-item';
import { City } from '../../types/offer';


type Props = {
  activeCity: City;
};

function LocationList({ activeCity }: Props): JSX.Element {
  const dispatch = useAppDispatch();
  const handleChangedCity = (evt: React.MouseEvent<HTMLAnchorElement>) => {
    evt.preventDefault();
    const changedCity: string = evt.currentTarget.innerText;
    const city = changeCity(LOCATIONS, changedCity);
    if (city) {
      dispatch(changeCityAction({ city: city }));
    }
  };

  return (
    <ul className="locations__list tabs__list">
      {LOCATIONS.map((location) => <LocationItem key={location.name} location={location.name} activeCity={activeCity.name} onClick={handleChangedCity} />)}
    </ul>
  );
}

export default LocationList;
