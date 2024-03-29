import { locations } from '../../const';
import { useAppDispatch } from '../../hooks';
import LocationItem from '../location-item/location-item';
import { City } from '../../types/offer';
import { getCity } from '../../store/offer-process/offer-process';


type Props = {
  activeCity: City;
};

function LocationList({ activeCity }: Props): JSX.Element {
  const dispatch = useAppDispatch();
  const handleChangedCity = (changedCity: string) => {
    const cityKey = Object.keys(locations).find((location) => location === changedCity);
    if (cityKey) {
      dispatch(getCity({ city: locations[cityKey] }));
    }
  };

  return (
    <ul className="locations__list tabs__list">
      {Object.values(locations).map((location) => <LocationItem key={location.name} location={location.name} activeCity={activeCity.name} onClick={handleChangedCity} />)}
    </ul>
  );
}

export default LocationList;
