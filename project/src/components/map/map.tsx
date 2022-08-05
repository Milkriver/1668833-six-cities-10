import { useRef, useEffect } from 'react';
import { Icon, Marker } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { City, Offer } from '../../types/offer';
import useMap from '../../hooks/use-map';
import { URL_MARKER_CURRENT, URL_MARKER_DEFAULT } from '../../const';

type Props = {
  city: City;
  offers: Offer[];
  selectedOffer: Offer | undefined;
  className: string;
};

const defaultCustomIcon = new Icon({
  iconUrl: URL_MARKER_DEFAULT,
  iconSize: [40, 40],
  iconAnchor: [20, 40]
});

const currentCustomIcon = new Icon({
  iconUrl: URL_MARKER_CURRENT,
  iconSize: [40, 40],
  iconAnchor: [20, 40]
});

function Map({ city, offers, selectedOffer, className }: Props): JSX.Element {
  const mapRef = useRef(null);
  const map = useMap(mapRef, city);

  useEffect(() => {
    if (map) {
      offers.forEach((offer) => {
        const marker = new Marker({
          lat: offer.lat,
          lng: offer.lng
        });

        marker
          .setIcon(
            selectedOffer !== undefined && offer.name === selectedOffer.name
              ? currentCustomIcon
              : defaultCustomIcon
          )
          .addTo(map);
      });
      map.flyTo({ lat: city.lat, lng: city.lng }, city.zoom);
    }
  }, [map, offers, selectedOffer, city]);

  return <section className={`${className}map map`} ref={mapRef}></section>;
}

export default Map;
