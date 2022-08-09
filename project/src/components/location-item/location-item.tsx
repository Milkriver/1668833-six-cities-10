type Props = {
  location: string;
  activeCity: string;
  onClick: (changedCity: string) => void;
}

function LocationItem({ location, activeCity, onClick }: Props): JSX.Element {
  const isActive = activeCity === location;
  const handleClick = (evt: React.MouseEvent<HTMLAnchorElement>) => {
    evt.preventDefault();
    onClick(location);
  };
  return (
    <li className="locations__item">
      <a className={`locations__item-link tabs__item ${(isActive) ? 'tabs__item--active' : ''}`} href="#" onClick={handleClick}>
        <span>{location}</span>
      </a>
    </li >
  );
}

export default LocationItem;
