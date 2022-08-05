type Props = {
  location: string;
  activeCity: string;
}

function LocationItem({ location, activeCity }: Props): JSX.Element {
  const isActive = activeCity === location;
  return (
    <li className="locations__item">
      <a className={`locations__item-link tabs__item ${(isActive) ? 'tabs__item--active' : ''}`} href="#">
        <span>{location}</span>
      </a>
    </li >
  );
}

export default LocationItem;
