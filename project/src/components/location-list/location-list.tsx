import { locations } from '../../const';
import LocationItem from '../location-item/location-item';


type Props = {
  activeCity: string;
};

function LocationList({activeCity}: Props): JSX.Element {
  return (
    <ul className="locations__list tabs__list">
      {locations.map((location) => <LocationItem key={location} location={location} activeCity={activeCity}/>)}
    </ul>
  );
}

export default LocationList;
