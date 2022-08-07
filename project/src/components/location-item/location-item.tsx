type Props = {
  location: string;
  activeCity: string;
  onClick: (evt: React.MouseEvent<HTMLAnchorElement>) => void;
}

function LocationItem({ location, activeCity, onClick }: Props): JSX.Element {
  const isActive = activeCity === location;
  return (
    <li className="locations__item">
      <a className={`locations__item-link tabs__item ${(isActive) ? 'tabs__item--active' : ''}`} href="#" onClick={onClick}>
        <span>{location}</span>
      </a>
    </li >
  );
}

export default LocationItem;
