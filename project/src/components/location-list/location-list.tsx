import { LOCATIONS } from '../../const';
import LocationItem from '../location-item/location-item';


type Props = {
  activeCity: string;
};

function LocationList({activeCity}: Props): JSX.Element {
  return (
    <ul className="locations__list tabs__list">
      {LOCATIONS.map((location) => <LocationItem key={location.name} location={location.name} activeCity={activeCity}/>)}
    </ul>
  );
}

export default LocationList;
